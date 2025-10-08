import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

const SESSION_COOKIE = "fsw_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

interface SessionPayload {
  adminId: string;
  restaurantId: string;
  issuedAt: number;
  version: number;
}

const getSecret = () => {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET environment variable");
  }
  return secret;
};

const encodePayload = (payload: SessionPayload) => {
  const serialized = JSON.stringify(payload);
  const signature = createHmac("sha256", getSecret()).update(serialized).digest("hex");
  const token = `${Buffer.from(serialized, "utf-8").toString("base64url")}.${signature}`;
  return token;
};

const decodePayload = (token: string): SessionPayload | null => {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) {
    return null;
  }
  const serialized = Buffer.from(encoded, "base64url").toString("utf-8");
  const expectedSignature = createHmac("sha256", getSecret()).update(serialized).digest("hex");
  try {
    if (!timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedSignature, "hex"))) {
      return null;
    }
  } catch {
    return null;
  }
  try {
    return JSON.parse(serialized) as SessionPayload;
  } catch {
    return null;
  }
};

export const createAdminSession = async ({
  adminId,
  restaurantId,
}: {
  adminId: string;
  restaurantId: string;
}) => {
  const payload: SessionPayload = {
    adminId,
    restaurantId,
    issuedAt: Date.now(),
    version: 1,
  };
  const token = encodePayload(payload);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
};

export const getAdminSession = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }
  const payload = decodePayload(token);
  if (!payload) {
    return null;
  }
  return { adminId: payload.adminId, restaurantId: payload.restaurantId };
};

export const destroyAdminSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
};

export const requireAdminSession = async () => {
  const session = await getAdminSession();
  if (!session) {
    throw new Error("Admin session required");
  }
  return session;
};
