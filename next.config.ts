import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "u9a6wmr3as.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s2-oglobo.glbimg.com",
      },
      {
        protocol: "https",
        hostname: "www.seara.com.br", // <-- novo domínio adicionado aqui
      },
      {
        protocol: "https",
        hostname: "marketplace.canva.com", // <-- novo domínio adicionado aqui
      },
      {
        protocol: "https",
        hostname: "www.searafoodsolutions.com.br", // <-- novo domínio adicionado aqui
      },
    ],
  },
};

export default nextConfig;
