"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, UploadIcon } from "lucide-react";
import { useCallback, useRef, useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createProduct } from "@/app/admin/actions/menu";
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

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

const AddProductForm = ({
  categoryId,
  routerRefresh,
}: {
  categoryId: string;
  routerRefresh: () => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
      ingredients: "",
      videoUrl: "",
    },
  });

  const handleFileSelect = useCallback(async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    const dataUrl = await toBase64(file);
    form.setValue("imageUrl", dataUrl, { shouldDirty: true, shouldTouch: true });
  }, [form]);

  const handleSubmit = (values: ProductFormValues) => {
    startTransition(async () => {
      const result = await createProduct({ menuCategoryId: categoryId, ...values });
      if (result.ok) {
        form.reset();
        routerRefresh();
        setOpen(false);
      }
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="w-full sm:w-auto">
          <PlusIcon className="mr-2 h-4 w-4" />
          Adicionar produto
        </Button>
      </SheetTrigger>
      <SheetContent className="h-[80vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Novo produto</SheetTitle>
          <SheetDescription>Preencha os dados para adicionar um item ao cardápio.</SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
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
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductForm;
