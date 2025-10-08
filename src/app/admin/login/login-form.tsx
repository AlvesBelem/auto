"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginAdmin } from "@/app/admin/actions/auth";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email("Informe um e-mail valido"),
  password: z.string().min(1, "Informe sua senha"),
});

type FormValues = z.infer<typeof schema>;

const LoginForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (values: FormValues) => {
    setErrorMessage(null);
    startTransition(async () => {
      const result = await loginAdmin(values);
      if (!result.ok) {
        setErrorMessage(result.error);
        return;
      }
      router.push("/admin");
    });
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <LogInIcon className="h-4 w-4" />
        <span>Acesso ao painel ServeFlow</span>
      </div>
      {errorMessage ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {errorMessage}
        </p>
      ) : null}
      <Form {...form}>
        <form className="mt-6 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="voce@seurestaurante.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="Sua senha" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isPending} size="lg" type="submit">
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2Icon className="h-4 w-4 animate-spin" />
                <span>Validando acesso...</span>
              </span>
            ) : (
              "Entrar no painel"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
