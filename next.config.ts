import type { NextConfig } from "next";

// Base de hosts conhecidos do projeto. Mantemos aqui os que já usamos.
const baseHosts = [
  "u9a6wmr3as.ufs.sh",
  "images.unsplash.com",
  "s2-oglobo.glbimg.com",
  "www.seara.com.br",
  "marketplace.canva.com",
  "www.searafoodsolutions.com.br",
  "www.oliberal.com",
];

// Permite adicionar hosts via variável de ambiente (separados por vírgula).
// Ex.: NEXT_IMAGE_HOSTS=cdn.exemplo.com,static.foo.bar
const envHosts = (process.env.NEXT_IMAGE_HOSTS || "")
  .split(",")
  .map((h) => h.trim())
  .filter(Boolean);

const uniqueHosts = Array.from(new Set([...baseHosts, ...envHosts]));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: uniqueHosts.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
};

export default nextConfig;
