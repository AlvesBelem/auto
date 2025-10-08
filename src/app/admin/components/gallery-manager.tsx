"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Trash2Icon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  createGalleryImage,
  deleteGalleryImage,
} from "@/app/admin/actions/gallery";
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

const schema = z.object({
  imageUrl: z.string().trim().min(1, "Selecione ou informe a URL da imagem"),
  title: z.string().trim().max(80).optional(),
  description: z.string().trim().max(160).optional(),
});

type FormValues = z.infer<typeof schema>;

interface GalleryManagerProps {
  images: Array<{
    id: string;
    imageUrl: string;
    title: string | null;
    description: string | null;
  }>;
}

const GalleryManager = ({ images }: GalleryManagerProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      imageUrl: "",
      title: "",
      description: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    startTransition(async () => {
      const result = await createGalleryImage(values);
      if (result.ok) {
        form.reset();
        router.refresh();
      }
    });
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      const result = await deleteGalleryImage({ id });
      if (result.ok) {
        router.refresh();
      }
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3 text-slate-600">
        <ImageIcon className="h-5 w-5" />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Galeria do restaurante</h3>
          <p className="text-sm text-slate-500">Adicione fotos para reforcar a atmosfera e o visual da marca.</p>
        </div>
      </div>
      <Form {...form}>
        <form className="mt-6 grid gap-4 md:grid-cols-3" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Imagem (upload ou URL)</FormLabel>
                <FormDescription>
                  Recomendado 1200x800 px, JPG otimizado. Você pode enviar um arquivo ou colar a URL.
                </FormDescription>
                <FormControl>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Input
                      placeholder="https://..."
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="shrink-0 rounded-xl"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <UploadIcon className="mr-2 h-4 w-4" />
                      Escolher arquivo
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (event) => {
                        const file = event.target.files?.[0];
                        if (!file) {
                          return;
                        }
                        const reader = new FileReader();
                        reader.onload = () => {
                          form.setValue("imageUrl", reader.result as string, {
                            shouldDirty: true,
                            shouldTouch: true,
                          });
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Legenda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Descricao (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Mensagem curta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:self-end">
            <Button className="w-full" disabled={isPending} type="submit">
              {isPending ? "Adicionando..." : "Adicionar imagem"}
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" key={image.id}>
            <div className="relative h-40 w-full overflow-hidden bg-muted">
              <Image
                alt={image.title ?? "Imagem da galeria"}
                src={image.imageUrl}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 p-4 text-sm text-slate-600">
              {image.title ? <p className="font-semibold text-slate-900">{image.title}</p> : null}
              {image.description ? <p>{image.description}</p> : null}
              <Button
                className="w-full"
                disabled={isPending}
                type="button"
                variant="outline"
                onClick={() => handleDelete(image.id)}
              >
                <Trash2Icon className="mr-2 h-4 w-4" /> Remover
              </Button>
            </div>
          </div>
        ))}
        {images.length === 0 ? (
          <p className="col-span-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            Nenhuma imagem cadastrada ainda. Adicione a primeira para deixar sua landing mais atrativa.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default GalleryManager;

