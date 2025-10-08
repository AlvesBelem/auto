export const BASE_ALLOWED_IMAGE_HOSTS = [
  "u9a6wmr3as.ufs.sh",
  "images.unsplash.com",
  "s2-oglobo.glbimg.com",
  "www.seara.com.br",
  "marketplace.canva.com",
  "www.searafoodsolutions.com.br",
  "www.oliberal.com",
  "i0.wp.com",
  "i1.wp.com",
  "i2.wp.com",
  "i3.wp.com",
];

const envHosts = (process.env.NEXT_PUBLIC_IMAGE_HOSTS || process.env.NEXT_IMAGE_HOSTS || "")
  .split(",")
  .map((h) => h.trim())
  .filter(Boolean);

const allowed = new Set<string>([...BASE_ALLOWED_IMAGE_HOSTS, ...envHosts]);

export const isAllowedRemoteHost = (src: string) => {
  try {
    const url = new URL(src);
    return allowed.has(url.hostname);
  } catch {
    return true; // treat non-URL (e.g., data URI or local path) as allowed
  }
};

export const normalizeImageSrc = (src: string) => {
  if (!src) return src;
  return isAllowedRemoteHost(src)
    ? src
    : `/api/img?src=${encodeURIComponent(src)}`;
};
