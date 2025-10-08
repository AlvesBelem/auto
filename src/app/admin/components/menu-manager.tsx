"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PencilIcon, PlusIcon, Trash2Icon, UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  createCategory,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct,
} from "@/app/admin/actions/menu";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import AddProductForm from "./add-product-form";
import BulkImportSheet from "./bulk-import-sheet";

const categorySchema = z.object({
  name: z.string().trim().min(3, "Nome muito curto"),
});

const productSchema = z.object({
  name: z.string().trim().min(3, "Nome muito curto"),
  description: z.string().trim().min(10, "Descrição muito curta"),
  price: z.coerce.number().min(0.5, "Informe um valor válido"),
  imageUrl: z.string().trim().min(1, "Selecione uma imagem"),
  ingredients: z.string().trim().optional(),
  videoUrl: z
    .string()
    .trim()
    .url("Informe uma URL válida")
    .optional()
    .or(z.literal("").transform(() => undefined)),
});

type ProductFormValues = z.infer<typeof productSchema>;
type CategoryFormValues = z.infer<typeof categorySchema>;

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

interface MenuManagerProps {
  categories: Array<{
    id: string;
    name: string;
    products: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
      imageUrl: string;
      videoUrl?: string | null;
      ingredients: string[];
    }>;
  }>;
}

const MenuManager = ({ categories }: MenuManagerProps) => {
  const router = useRouter();
  const refresh = () => router.refresh();

  return (
    <div className="space-y-8">
      <BulkImportSheet />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Categorias do cardápio</h3>
            <p className="text-sm text-slate-500">Agrupe produtos e organize a ordem do seu cardápio.</p>
          </div>
          <CreateCategorySheet onCreated={refresh} />
        </div>
      </div>
      <div className="space-y-6">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} routerRefresh={refresh} />
        ))}
        {categories.length === 0 && (
          <p className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Nenhuma categoria cadastrada ainda. Comece criando uma para organizar seus produtos.
          </p>
        )}
      </div>
    </div>
  );
};

interface CategoryCardProps {
  category: MenuManagerProps["categories"][number];
  routerRefresh: () => void;
}

const CategoryCard = ({ category, routerRefresh }: CategoryCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const categoryForm = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: category.name },
  });

  const handleUpdate = (values: CategoryFormValues) => {
    startTransition(async () => {
      const result = await updateCategory({ id: category.id, name: values.name });
      if (result.ok) {
        setIsEditing(false);
        routerRefresh();
      }
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteCategory({ id: category.id });
      if (result.ok) routerRefresh();
    });
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id={category.id}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="text-xl font-semibold text-slate-900">{category.name}</h4>
          <p className="text-sm text-slate-500">{category.products.length} produtos cadastrados</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
            <PencilIcon className="mr-2 h-4 w-4" /> Renomear
          </Button>
          <Button variant="outline" onClick={handleDelete}>
            <Trash2Icon className="mr-2 h-4 w-4" /> Remover
          </Button>
        </div>
      </div>

      {isEditing && (
        <Form {...categoryForm}>
          <form onSubmit={categoryForm.handleSubmit(handleUpdate)} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <FormField
              control={categoryForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="sr-only">Nome da categoria</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>Salvar</Button>
          </form>
        </Form>
      )}

      <div className="mt-6 space-y-4">
        {category.products.map((product) => (
          <ProductCard key={product.id} categoryId={category.id} product={product} routerRefresh={routerRefresh} />
        ))}
        <AddProductForm categoryId={category.id} routerRefresh={routerRefresh} />
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    videoUrl?: string | null;
    ingredients: string[];
  };
  categoryId: string;
  routerRefresh: () => void;
}

const ProductCard = ({ product, categoryId, routerRefresh }: ProductCardProps) => {
  const [editOpen, setEditOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      videoUrl: product.videoUrl ?? "",
      ingredients: product.ingredients.join(", "),
    },
  });

  const handleFileSelect = useCallback(async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    const dataUrl = await toBase64(file);
    form.setValue("imageUrl", dataUrl, { shouldDirty: true, shouldTouch: true });
  }, [form]);

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteProduct({ id: product.id });
      if (result.ok) routerRefresh();
    });
  };

  const handleUpdate = (values: ProductFormValues) => {
    startTransition(async () => {
      const result = await updateProduct({ id: product.id, menuCategoryId: categoryId, ...values });
      if (result.ok) {
        setEditOpen(false);
        routerRefresh();
      }
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h5 className="text-lg font-semibold text-slate-900">{product.name}</h5>
          <p className="text-sm text-slate-500">R$ {product.price.toFixed(2)}</p>
          <p className="mt-2 text-sm text-slate-600">{product.description}</p>
          {product.ingredients.length > 0 && (
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
              Ingredientes: {product.ingredients.join(", ")}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setEditOpen(true)}>
            <PencilIcon className="mr-2 h-4 w-4" /> Editar
          </Button>
          <Button variant="outline" onClick={handleDelete}>
            <Trash2Icon className="mr-2 h-4 w-4" /> Remover
          </Button>
        </div>
      </div>

      <Sheet open={editOpen} onOpenChange={setEditOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl">
          <SheetHeader>
            <SheetTitle>Editar produto</SheetTitle>
            <SheetDescription>Atualize os dados do item do cardápio.</SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <Form {...form}>
              <form className="grid gap-4" onSubmit={form.handleSubmit(handleUpdate)}>
                {/* Nome e preço */}
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço</FormLabel>
                        <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Imagem */}
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imagem</FormLabel>
                      <FormControl>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Input placeholder="https://..." {...field} />
                          <Button
                            type="button"
                            variant="outline"
                            className="shrink-0"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <UploadIcon className="mr-2 h-4 w-4" />
                            Arquivo
                          </Button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileSelect(e.target.files)}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Vídeo */}
                <FormField
                  control={form.control}
                  name="videoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vídeo (URL)</FormLabel>
                      <FormControl><Input placeholder="https://..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Descrição */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Ingredientes */}
                <FormField
                  control={form.control}
                  name="ingredients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ingredientes</FormLabel>
                      <FormControl><Input placeholder="Ex: pão, carne, queijo" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <Button type="submit" disabled={isPending}>Salvar</Button>
                  <Button type="button" variant="ghost" onClick={() => setEditOpen(false)}>Cancelar</Button>
                </div>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const CreateCategorySheet = ({ onCreated }: { onCreated: () => void }) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "" },
  });

  const handleSubmit = (values: CategoryFormValues) => {
    startTransition(async () => {
      const result = await createCategory(values);
      if (result.ok) {
        form.reset();
        setOpen(false);
        onCreated();
      }
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2" type="button">
          <PlusIcon className="h-4 w-4" /> Nova categoria
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Nova categoria</SheetTitle>
          <SheetDescription>Crie uma categoria para agrupar seus produtos.</SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da categoria</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Combos, Sobremesas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button type="submit" disabled={isPending}>Salvar</Button>
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuManager;
