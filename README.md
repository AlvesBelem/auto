# Auto Checkout Platform

Aplicação full-stack construída com Next.js para oferecer onboarding de restaurantes, totem de autoatendimento para clientes e painel administrativo seguro.

## Visão geral

O produto é composto por três pilares:

- **Landing page de marketing** com formulário de trial de 7 dias integrado à Stripe.
- **Fluxo público do totem** por slug do restaurante, com menu, sacola e checkout com pagamento online.
- **Painel administrativo** protegido por sessão para gestão de cardápio, identidade visual e mídia.

## Stack

- [Next.js 15](https://nextjs.org/) com App Router
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- [Stripe](https://stripe.com/) para billing e checkout
- Tailwind CSS, Radix UI e shadcn/ui para a interface

## Requisitos

- Node.js 20+
- Banco PostgreSQL disponível
- Conta Stripe (modo teste) para gerar as chaves de API

## Configuração

1. Crie o arquivo de variáveis de ambiente a partir do template:

   ```bash
   cp .env.example .env
   ```

2. Preencha os valores solicitados:

   | Variável | Descrição |
   | --- | --- |
   | `DATABASE_URL` | URL de conexão com o PostgreSQL.
   | `ADMIN_SESSION_SECRET` | Chave aleatória para assinar a sessão do painel (`openssl rand -base64 32`).
   | `APP_BASE_URL` | URL base do app (ex.: `http://localhost:3000`). Usada como fallback quando o header `origin` não está disponível.
   | `STRIPE_SECRET_KEY` | Chave secreta da Stripe (modo teste).
   | `STRIPE_RESTAURANT_PRICE_ID` | ID do preço/plan da assinatura criado na Stripe.
   | `STRIPE_WEBHOOK_SECRET_KEY` | Secret do webhook configurado na Stripe.
   | `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | Chave pública (publishable) da Stripe usada no cliente.

3. Instale dependências e gere o client do Prisma:

   ```bash
   npm install
   ```

4. Aplique as migrações e popule dados base (opcional, mas recomendado para ter um restaurante demo):

   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

## Executando em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Scripts úteis

- `npm run lint` — roda as checagens de ESLint/TypeScript.
- `npx prisma studio` — abre o Prisma Studio para inspecionar o banco.

## Webhooks da Stripe

Configure um endpoint na Stripe apontando para `/api/webhooks/stripe` e utilize o secret correspondente em `STRIPE_WEBHOOK_SECRET_KEY` para validar as assinaturas.

## Deploy na Vercel

1. Crie um projeto na Vercel apontando para este repositório.
2. Configure todas as variáveis de ambiente citadas acima na Vercel.
3. Garanta que o banco de produção esteja acessível e rode `npx prisma migrate deploy` via Vercel Deploy Hooks ou manualmente.
4. Após o deploy, atualize o campo `APP_BASE_URL` com a URL final (ex.: `https://seuapp.vercel.app`).

Com isso, o projeto estará pronto para ser usado como MVP após o deploy.
