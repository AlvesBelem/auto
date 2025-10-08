"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PencilIcon, PlusIcon, Trash2Icon, UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct,
} from "@/app/admin/actions/menu";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const categorySchema = z.object({
  name: z.string().trim().min(3, "Nome muito curto"),
});

const productSchema = z.object({
  name: z.string().trim().min(3, "Nome muito curto"),
  description: z.string().trim().min(10, "Descricao muito curta"),
  price: z.coerce.number().min(0.5, "Informe um valor valido"),
  imageUrl: z.string().trim().min(1, "Selecione uma imagem"),
  ingredients: z.string().trim().optional(),
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
      ingredients: string[];
    }>;
  }>;
}

const MenuManager = ({ categories }: MenuManagerProps) => {
  const router = useRouter();
  const refresh = () => router.refresh();
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
        refresh();
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Categorias do cardapio</h3>
        <p className="text-sm text-slate-500">Agrupe produtos e organize a ordem do seu cardapio.</p>
        <Form {...form}>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="sr-only">Nome da categoria</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Combos, Sobremesas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} type="submit">
              <PlusIcon className="mr-2 h-4 w-4" /> Nova categoria
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-6">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} routerRefresh={refresh} />
        ))}
        {categories.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Nenhuma categoria cadastrada ainda. Comece criando uma para organizar seus produtos.
          </p>
        ) : null}
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
      if (result.ok) {
        routerRefresh();
      }
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
          <Button variant="outline" onClick={() => setIsEditing((prev) => !prev)}>
            <PencilIcon className="mr-2 h-4 w-4" /> Renomear
          </Button>
          <Button variant="outline" onClick={handleDelete}>
            <Trash2Icon className="mr-2 h-4 w-4" /> Remover
          </Button>
        </div>
      </div>
      {isEditing ? (
        <Form {...categoryForm}>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={categoryForm.handleSubmit(handleUpdate)}>
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
            <Button disabled={isPending} type="submit">
              Salvar
            </Button>
          </form>
        </Form>
      ) : null}
      <div className="mt-6 space-y-4">
        {category.products.map((product) => (
          <ProductCard categoryId={category.id} key={product.id} product={product} routerRefresh={routerRefresh} />
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
    ingredients: string[];
  };
  categoryId: string;
  routerRefresh: () => void;
}

const ProductCard = ({ product, categoryId, routerRefresh }: ProductCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      ingredients: product.ingredients.join(", "),
    },
  });

  const handleFileSelect = useCallback(async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) {
      return;
    }
    try {
      const dataUrl = await toBase64(file);
      form.setValue("imageUrl", dataUrl, { shouldDirty: true, shouldTouch: true });
    } catch {
      // noop
    }
  }, [form]);

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteProduct({ id: product.id });
      if (result.ok) {
        routerRefresh();
      }
    });
  };

  const handleUpdate = (values: ProductFormValues) => {
    startTransition(async () => {
      const payload = {
        id: product.id,
        menuCategoryId: categoryId,
        ...values,
      };
      const result = await updateProduct(payload);
      if (result.ok) {
        setIsEditing(false);
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
          {product.ingredients.length > 0 ? (
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
              Ingredientes: {product.ingredients.join(", ")}
            </p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsEditing((prev) => !prev)}>
            <PencilIcon className="mr-2 h-4 w-4" /> Editar
          </Button>
          <Button variant="outline" onClick={handleDelete}>
            <Trash2Icon className="mr-2 h-4 w-4" /> Remover
          </Button>
        </div>
      </div>
      {isEditing ? (
        <Form {...form}>
          <form className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4" onSubmit={form.handleSubmit(handleUpdate)}>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preco</FormLabel>
                    <FormControl>
                      <Input step="0.01" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormDescription>
                    Recomendada 800x600 px, JPG otimizado ou PNG transparente.
                  </FormDescription>
                  <FormControl>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Input placeholder="https://..." {...field} />
                      <Button
                        type="button"
                        variant="outline"
                        className="shrink-0 rounded-xl"
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
                        onChange={(event) => handleFileSelect(event.target.files)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descricao</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredientes (separados por virgula)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: pao, carne, queijo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <Button disabled={isPending} type="submit">
                Salvar produto
              </Button>
              <Button onClick={() => setIsEditing(false)} type="button" variant="ghost">
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      ) : null}
    </div>
  );
};


interface AddProductFormProps {
  categoryId: string;
  routerRefresh: () => void;
}

const AddProductForm = ({ categoryId, routerRefresh }: AddProductFormProps) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 29.9,
      imageUrl: "",
      ingredients: "",
    },
  });

  const handleFileSelect = useCallback(async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) {
      return;
    }
    try {
      const dataUrl = await toBase64(file);
      form.setValue("imageUrl", dataUrl, { shouldDirty: true, shouldTouch: true });
    } catch {
      setError("Nao foi possivel ler o arquivo selecionado.");
    }
  }, [form]);

  const handleSubmit = (values: ProductFormValues) => {
    startTransition(async () => {
      setError(null);
      const payload = {
        menuCategoryId: categoryId,
        ...values,
      };
      const result = await createProduct(payload);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      form.reset({
        name: "",
        description: "",
        price: 29.9,
        imageUrl: "",
        ingredients: "",
      });
      setOpen(false);
      routerRefresh();
    });
  };

  if (!open) {
    return (
      <Button
        className="w-full bg-amber-500 text-white hover:bg-amber-600"
        onClick={() => setOpen(true)}
        type="button"
      >
        <PlusIcon className="mr-2 h-4 w-4" /> Novo produto
      </Button>
    );
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        ) : null}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preco</FormLabel>
                <FormControl>
                  <Input step="0.01" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormDescription>
                Recomendada 800x600 px (JPG) ou PNG com fundo transparente.
              </FormDescription>
              <FormControl>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Input placeholder="https://..." {...field} />
                  <Button
                    type="button"
                    variant="outline"
                    className="shrink-0 rounded-xl"
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
                    onChange={(event) => handleFileSelect(event.target.files)}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descricao</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredientes (separados por virgula)</FormLabel>
              <FormControl>
                <Input placeholder="Ex: pao, carne, queijo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button disabled={isPending} type="submit">
            Salvar produto
          </Button>
          <Button onClick={() => setOpen(false)} type="button" variant="ghost">
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  );
};


export default MenuManager;



