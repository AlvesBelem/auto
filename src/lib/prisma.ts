import "server-only";

import { loadEnvConfig } from "@next/env";
import { PrismaClient } from "../../generate";

if (!process.env.DATABASE_URL) {
  loadEnvConfig(process.cwd());
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL environment variable.");
}

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

const prismaClient = () =>
  new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  });

const prisma =
  process.env.NODE_ENV === "production"
    ? prismaClient()
    : (global.cachedPrisma ??= prismaClient());

export const db = prisma;
