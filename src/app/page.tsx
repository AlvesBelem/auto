import { ArrowRightIcon, Clock3Icon, LeafIcon, LineChartIcon, PaletteIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";

import StartTrialForm from "@/app/components/start-trial-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Totem pronto para usar",
    description:
      "Fluxo guiado que reduz filas e aumenta o ticket medio em ate 22% logo na primeira semana.",
    icon: SparklesIcon,
  },
  {
    title: "Gestão centralizada",
    description:
      "Atualize cardapio, fotos, cores da marca e precos em tempo real em todos os pontos de venda.",
    icon: LineChartIcon,
  },
  {
    title: "Checkout integrado",
    description:
      "Stripe ja conectado para iniciar o trial, renovar o plano e reconciliar receitas automaticamente.",
    icon: ArrowRightIcon,
  },
];

const adminHighlights = [
  {
    title: "Branding instantaneo",
    description:
      "Defina cores, logos e mensagens de boas-vindas que aparecem imediatamente nos totens e no menu digital.",
    icon: PaletteIcon,
  },
  {
    title: "Biblioteca visual",
    description:
      "Organize galerias com fotos profissionais do restaurante para reforcar a experiencia do seu cliente.",
    icon: LeafIcon,
  },
  {
    title: "Cardapio dinamico",
    description:
      "Crie categorias, cadastre produtos com ingredientes e controle precos promocionais em segundos.",
    icon: ArrowRightIcon,
  },
];

const testimonials = [
  {
    quote:
      "Em menos de 15 dias reduzimos o tempo medio de pedido em 38% e dobramos os pedidos fora do horario de pico.",
    author: "Julia Fernandes",
    role: "Fundadora do Urban Greens",
  },
  {
    quote:
      "O painel e intuitivo, consigo reajustar cardapio e fotos no proprio celular. A equipe de frente agradece!",
    author: "Daniel Nogueira",
    role: "COO do Brasa99",
  },
  {
    quote:
      "Integracao com Stripe poupou semanas de trabalho. A cobranca recorrente roda sozinha desde o primeiro trial.",
    author: "Aline Costa",
    role: "CTO do Nilo Street Food",
  },
];

const HomePage = () => {
  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 text-slate-100" id="topo">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2)_0,_rgba(15,23,42,0)_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-slate-200">
              <SparklesIcon className="h-4 w-4 text-amber-300" />
              ServeFlow Checkout — autoatendimento para restaurantes em crescimento
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Lance um totem de auto-checkout em minutos e surpreenda cada cliente.
            </h1>
            <p className="max-w-xl text-lg text-slate-200/80">
              ServeFlow integra totens, cardapio digital e cobranca recorrente em um unico painel. Teste por 7 dias e veja as filas sumirem.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />
                <span>Checkout seguro com Stripe</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3Icon className="h-4 w-4 text-amber-300" />
                <span>Trial ativo em menos de 2 minutos</span>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:max-w-sm">
            <StartTrialForm />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="max-w-3xl space-y-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Por que ServeFlow
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Multiplique pedidos sem aumentar a equipe
            </h2>
            <p className="text-lg text-slate-600">
              Automatize etapas repetitivas, personalize a jornada do cliente e mantenha o controle financeiro na mesma tela.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card className="h-full border-slate-200/80 bg-white" key={feature.title}>
                <CardHeader className="space-y-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Painel admin completo para personalizar a experiencia
            </h2>
            <p className="text-lg text-slate-600">
              Depois de ativar o trial voce ganha acesso instantaneo ao painel ServeFlow. Ajuste cores, fotos, categorias e precos com feedback em tempo real nos totens.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {adminHighlights.map((item) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={item.title}>
                  <item.icon className="mb-3 h-5 w-5 text-slate-500" />
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-4 w-fit" asChild>
              <a href="#teste-gratis">Teste por 7 dias gratis</a>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end gap-4 p-8 text-slate-100">
              <span className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Painel admin</span>
              <h3 className="text-2xl font-semibold">Visualize em tempo real como o cliente enxerga o totem</h3>
              <p className="text-sm text-slate-200/80">
                Edite cardapio arrastando e soltando, atualize fotos e cores e acompanhe metricas de pedidos confirmados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20" id="teste-gratis">
        <div className="mx-auto max-w-6xl space-y-14">
          <header className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Historias de quem ja eliminou filas</h2>
            <p className="text-lg text-slate-600">
              Restaurantes de diferentes formatos aumentaram a conversao depois de liberar ServeFlow em seus pontos de venda.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card className="h-full border-slate-200 bg-white p-6" key={testimonial.author}>
                <CardContent className="flex h-full flex-col justify-between gap-6 p-0">
                  <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Chegou a hora de automatizar seus pedidos</h3>
            <p className="mt-3 text-slate-600">
              Inicie o trial gratuito, configure o painel e deixe que o ServeFlow cuide do checkout enquanto sua equipe foca na experiencia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="sm:w-auto" asChild>
                <a href="#topo">Quero testar agora</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-900" asChild>
                <a href="mailto:contato@serveflow.co">Falar com o time</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
