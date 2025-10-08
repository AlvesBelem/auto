# Auto Checkout Platform

AplicaÃ§Ã£o full-stack construÃ­da com Next.js para oferecer onboarding de restaurantes, totem de autoatendimento para clientes e painel administrativo seguro.

## VisÃ£o geral

O produto Ã© composto por trÃªs pilares:

- **Landing page de marketing** com formulÃ¡rio de trial de 14 dias integrado Ã  Stripe.
- **Fluxo pÃºblico do totem** por slug do restaurante, com menu, sacola e checkout com pagamento online.
- **Painel administrativo** protegido por sessÃ£o para gestÃ£o de cardÃ¡pio, identidade visual e mÃ­dia.

## Stack

- [Next.js 15](https://nextjs.org/) com App Router
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- [Stripe](https://stripe.com/) para billing e checkout
- Tailwind CSS, Radix UI e shadcn/ui para a interface

## Requisitos

- Node.js 20+
- Banco PostgreSQL disponÃ­vel
- Conta Stripe (modo teste) para gerar as chaves de API

## ConfiguraÃ§Ã£o

1. Crie o arquivo de variÃ¡veis de ambiente a partir do template:

   ```bash
   cp .env.example .env
   ```

2. Preencha os valores solicitados:

   | VariÃ¡vel | DescriÃ§Ã£o |
   | --- | --- |
   | `DATABASE_URL` | URL de conexÃ£o com o PostgreSQL.
   | `ADMIN_SESSION_SECRET` | Chave aleatÃ³ria para assinar a sessÃ£o do painel (`openssl rand -base64 32`).
   | `APP_BASE_URL` | URL base do app (ex.: `http://localhost:3000`). Usada como fallback quando o header `origin` nÃ£o estÃ¡ disponÃ­vel.
   | `STRIPE_SECRET_KEY` | Chave secreta da Stripe (modo teste).
   | `STRIPE_RESTAURANT_PRICE_ID` | ID do preÃ§o/plan da assinatura criado na Stripe.
   | `STRIPE_WEBHOOK_SECRET_KEY` | Secret do webhook configurado na Stripe.
   | `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | Chave pÃºblica (publishable) da Stripe usada no cliente.

3. Instale dependÃªncias e gere o client do Prisma:

   ```bash
   npm install
   ```

4. Aplique as migraÃ§Ãµes e popule dados base (opcional, mas recomendado para ter um restaurante demo):

   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

## Executando em desenvolvimento

```bash
npm run dev
```

O aplicativo estarÃ¡ disponÃ­vel em `http://localhost:3000`.

## Scripts Ãºteis

- `npm run lint` â€” roda as checagens de ESLint/TypeScript.
- `npx prisma studio` â€” abre o Prisma Studio para inspecionar o banco.

## Webhooks da Stripe

Configure um endpoint na Stripe apontando para `/api/webhooks/stripe` e utilize o secret correspondente em `STRIPE_WEBHOOK_SECRET_KEY` para validar as assinaturas.

## Deploy na Vercel

1. Crie um projeto na Vercel apontando para este repositÃ³rio.
2. Configure todas as variÃ¡veis de ambiente citadas acima na Vercel.
3. Garanta que o banco de produÃ§Ã£o esteja acessÃ­vel e rode `npx prisma migrate deploy` via Vercel Deploy Hooks ou manualmente.
4. ApÃ³s o deploy, atualize o campo `APP_BASE_URL` com a URL final (ex.: `https://seuapp.vercel.app`).

Com isso, o projeto estarÃ¡ pronto para ser usado como MVP apÃ³s o deploy.

