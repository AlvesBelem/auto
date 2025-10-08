"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, ShieldCheckIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { startTrial } from "@/app/actions/start-trial";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  restaurantName: z.string().min(3, "Informe um nome com pelo menos 3 caracteres"),
  restaurantDescription: z.string().min(10, "Conte rapidamente o que torna seu restaurante especial"),
  ownerName: z.string().min(3, "Informe seu nome completo"),
  ownerEmail: z.string().email("Digite um e-mail valido"),
  password: z.string().min(8, "Defina uma senha com pelo menos 8 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  restaurantName: "",
  restaurantDescription: "",
  ownerName: "",
  ownerEmail: "",
  password: "",
};

const StartTrialForm = () => {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    setErrorMessage(null);
    startTransition(async () => {
      const result = await startTrial(values);
      if (!result.ok) {
        setErrorMessage(result.error);
        if (result.fieldErrors) {
          Object.entries(result.fieldErrors).forEach(([field, message]) => {
            if (message) {
              form.setError(field as keyof FormValues, { message });
            }
          });
        }
        return;
      }
      window.location.href = result.checkoutUrl;
    });
  };

  return (
    <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur text-slate-900">
      <div className="flex items-center gap-2 text-sm font-medium text-sky-800">
        <ShieldCheckIcon className="h-4 w-4 text-emerald-500" />
        <span>Todos os recursos liberados por 14 dias</span>
      </div>
      {errorMessage ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Form {...form}>
        <form className="mt-6 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="restaurantName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Nome do restaurante</FormLabel>
                <FormControl>
                  <Input className="bg-white text-slate-900 placeholder:text-slate-400" placeholder="Ex: ServeFlow Burgers" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="restaurantDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">DescriÃ§Ã£o curta</FormLabel>
                <FormControl>
                  <Input className="bg-white text-slate-900 placeholder:text-slate-400" placeholder="Seu pitch em uma frase" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-800">Seu nome</FormLabel>
                  <FormControl>
                    <Input className="bg-white text-slate-900 placeholder:text-slate-400" placeholder="Nome do responsÃ¡vel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ownerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-800">E-mail profissional</FormLabel>
                  <FormControl>
                    <Input className="bg-white text-slate-900 placeholder:text-slate-400" placeholder="voce@seurestaurante.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Senha do painel</FormLabel>
                <FormControl>
                  <Input className="bg-white text-slate-900 placeholder:text-slate-400" placeholder="Min. 8 caracteres" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isPending} size="lg" type="submit">
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2Icon className="h-4 w-4 animate-spin" />
                <span>Iniciando seu ambiente...</span>
              </span>
            ) : (
              "Teste por 14 dias gratis"
            )}
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-xs text-slate-600">
        Sem cobranÃ§a durante o trial. Cancelamento com um clique no painel.
      </p>
    </div>
  );
};

export default StartTrialForm;

