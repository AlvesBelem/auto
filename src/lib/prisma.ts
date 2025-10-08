import "server-only";

import { PrismaClient } from "../../generate";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

const prismaClient = () => {
  const url = process.env.DATABASE_URL;
  return new PrismaClient(
    url
      ? {
          datasources: {
            db: { url },
          },
        }
      : undefined,
  );
};

const prisma =
  process.env.NODE_ENV === "production"
    ? prismaClient()
    : (global.cachedPrisma ??= prismaClient());

export const db = prisma;
