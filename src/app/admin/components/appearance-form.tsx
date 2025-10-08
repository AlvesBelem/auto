"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaintbrushIcon,
  SparklesIcon,
  UploadIcon,
} from "lucide-react";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { updateAppearance } from "@/app/admin/actions/appearance";
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
import { cn } from "@/lib/utils";

const hexColorRegex = /^#[0-9a-fA-F]{6}$/;

const schema = z.object({
  primaryColor: z.string().regex(hexColorRegex, "Cor primaria invalida"),
  secondaryColor: z.string().regex(hexColorRegex, "Cor secundaria invalida"),
  accentColor: z.string().regex(hexColorRegex, "Cor de destaque invalida"),
  surfaceColor: z.string().regex(hexColorRegex, "Cor de fundo invalida"),
  heroTitle: z.string().trim().min(3),
  heroSubtitle: z.string().trim().min(10),
  menuWelcomeTitle: z.string().trim().min(3),
  menuWelcomeMessage: z.string().trim().min(10),
  avatarImageUrl: z.string().trim().min(1),
  coverImageUrl: z.string().trim().min(1),
});

type FormValues = z.infer<typeof schema>;

interface AppearanceFormProps {
  initialValues: FormValues;
  showMessaging?: boolean;
  showImages?: boolean;
  showColors?: boolean;
}

const colorFields: Array<{
  key: keyof FormValues;
  label: string;
  helper: string;
}> = [
  {
    key: "primaryColor",
    label: "Cor primaria",
    helper: "Botoes de acao e destaques principais",
  },
  {
    key: "secondaryColor",
    label: "Cor secundaria",
    helper: "Elementos de apoio e estados neutros",
  },
  {
    key: "accentColor",
    label: "Cor de destaque",
    helper: "Links, badges e detalhes visuais",
  },
  {
    key: "surfaceColor",
    label: "Cor de fundo",
    helper: "Paineis, cartoes e areas de conteudo",
  },
];

const fileFields: Array<{
  key: "avatarImageUrl" | "coverImageUrl";
  label: string;
  placeholder: string;
  helper: string;
}> = [
  {
    key: "avatarImageUrl",
    label: "Logo exibida no totem",
    placeholder: "https://...",
    helper: "Recomendado 256x256 px, PNG com fundo transparente.",
  },
  {
    key: "coverImageUrl",
    label: "Imagem de capa",
    placeholder: "https://...",
    helper: "Recomendado 1600x900 px, JPG otimizado para web.",
  },
];

const ensureHex = (value?: string) =>
  value && hexColorRegex.test(value) ? value : "#000000";

const getContrastColor = (hex: string) => {
  const value = ensureHex(hex).replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#0f172a" : "#f8fafc";
};

const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

const AppearanceForm = ({
  initialValues,
  showMessaging = true,
  showImages = true,
  showColors = true,
}: AppearanceFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const colorWatch = form.watch([
    "primaryColor",
    "secondaryColor",
    "accentColor",
    "surfaceColor",
  ]);

  const previewTokens = useMemo(() => {
    const [primary, secondary, accent, surface] = colorWatch.map(ensureHex);
    return {
      primary,
      secondary,
      accent,
      surface,
      surfaceText: getContrastColor(surface),
    };
  }, [colorWatch]);

  const fileInputRefs = useRef<
    Record<"avatarImageUrl" | "coverImageUrl", HTMLInputElement | null>
  >({
    avatarImageUrl: null,
    coverImageUrl: null,
  });

  const handleFileChange = useCallback(
    async (field: "avatarImageUrl" | "coverImageUrl", fileList: FileList | null) => {
      const file = fileList?.[0];
      if (!file) {
        return;
      }
      try {
        const dataUrl = await toBase64(file);
        form.setValue(field, dataUrl, { shouldDirty: true, shouldTouch: true });
      } catch {
        setFeedback("Nao foi possivel carregar o arquivo selecionado.");
      }
    },
    [form],
  );

  const triggerFilePicker = (field: "avatarImageUrl" | "coverImageUrl") => {
    fileInputRefs.current[field]?.click();
  };

  const handleSubmit = (values: FormValues) => {
    setFeedback(null);
    startTransition(async () => {
      const result = await updateAppearance(values);
      if (!result.ok) {
        setFeedback(result.error);
        return;
      }
      setFeedback("Identidade atualizada com sucesso!");
    });
  };

  const heading = (() => {
    if (showColors && !showMessaging && !showImages) {
      return "Paleta de cores";
    }
    if ((showMessaging || showImages) && !showColors) {
      return "Identidade visual";
    }
    return "Identidade visual";
  })();

  const subtitle = (() => {
    if (showColors && !showMessaging && !showImages) {
      return "Ajuste as cores principais usadas na landing, totem e pedidos.";
    }
    if ((showMessaging || showImages) && !showColors) {
      return "Atualize textos e imagens que apresentam seu restaurante.";
    }
    return "Personalize mensagens, imagens e paleta exibidas para os clientes.";
  })();

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-start gap-3 text-slate-600">
        <div className="rounded-xl bg-slate-900/5 p-2">
          <PaintbrushIcon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{heading}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      {feedback ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {feedback}
        </p>
      ) : null}

      <Form {...form}>
        <form
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          {(showMessaging || showImages) && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-inner">
                {showMessaging && (
                  <>
                    <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      <SparklesIcon className="h-4 w-4" /> Mensagens exibidas
                    </p>
                    <div className="grid gap-4">
                      <FormField
                        control={form.control}
                        name="heroTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Titulo da landing</FormLabel>
                            <FormControl>
                              <Input placeholder="Mensagem principal" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="heroSubtitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subtitulo da landing</FormLabel>
                            <FormControl>
                              <Input placeholder="Complemento da mensagem" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="menuWelcomeTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Titulo no totem</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: Bem-vindo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="menuWelcomeMessage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensagem no totem</FormLabel>
                              <FormControl>
                                <Input placeholder="Orientacao inicial" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </>
                )}

                {showImages && (
                  <div className={cn(showMessaging ? "mt-6 grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2") }>
                    {fileFields.map(({ key, label, placeholder, helper }) => (
                      <FormField
                        key={key}
                        control={form.control}
                        name={key}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{label}</FormLabel>
                            <FormDescription>{helper}</FormDescription>
                            <FormControl>
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Input placeholder={placeholder} {...field} />
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="shrink-0 rounded-xl"
                                  onClick={() => triggerFilePicker(key)}
                                >
                                  <UploadIcon className="mr-2 h-4 w-4" />
                                  Arquivo
                                </Button>
                                <input
                                  ref={(node) => {
                                    fileInputRefs.current[key] = node;
                                  }}
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(event) =>
                                    handleFileChange(key, event.target.files)
                                  }
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {showColors && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Paleta de cores
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Ajuste via seletor ou cole o codigo hexadecimal da sua marca.
                </p>
                <div className="mt-4 space-y-4">
                  {colorFields.map(({ key, label, helper }) => (
                    <FormField
                      key={key}
                      control={form.control}
                      name={key}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center justify-between text-sm font-medium">
                            {label}
                            <span className="text-xs font-normal text-slate-400">
                              {helper}
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-3">
                              <input
                                aria-label={label}
                                className="h-10 w-12 cursor-pointer rounded-md border border-input bg-transparent"
                                type="color"
                                value={ensureHex(field.value)}
                                onBlur={field.onBlur}
                                onChange={(event) =>
                                  field.onChange(event.target.value)
                                }
                              />
                              <Input
                                {...field}
                                className="font-mono uppercase"
                                placeholder="#000000"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl border border-slate-200 p-6 shadow-sm transition-colors"
                style={{
                  background: previewTokens.surface,
                  color: previewTokens.surfaceText,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  Pre-visualizacao
                </p>
                <p className="mt-2 text-xs opacity-80">
                  Assim os componentes principais ficam com a paleta atual.
                </p>
                <div className="mt-5 grid gap-3">
                  <div
                    className="rounded-xl px-4 py-3 text-sm font-semibold shadow-sm"
                    style={{
                      background: previewTokens.primary,
                      color: getContrastColor(previewTokens.primary),
                    }}
                  >
                    CTA principal
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-sm font-semibold shadow-sm"
                    style={{
                      background: previewTokens.secondary,
                      color: getContrastColor(previewTokens.secondary),
                    }}
                  >
                    Botao secundario
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm"
                    style={{
                      background: previewTokens.accent,
                      color: getContrastColor(previewTokens.accent),
                    }}
                  >
                    Destaque
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-2 flex justify-end">
            <Button disabled={isPending} type="submit">
              {isPending ? "Salvando..." : "Salvar alteracoes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AppearanceForm;

