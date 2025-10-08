import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const KEY_LENGTH = 64;

export const hashPassword = (password: string) => {
  const salt = randomBytes(KEY_LENGTH).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
};

export const verifyPassword = (password: string, storedHash: string) => {
  const [salt, originalHash] = storedHash.split(":");
  if (!salt || !originalHash) {
    return false;
  }
  const derived = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  try {
    return timingSafeEqual(Buffer.from(derived, "hex"), Buffer.from(originalHash, "hex"));
  } catch {
    return false;
  }
};
