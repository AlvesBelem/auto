const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

interface Hsl {
  h: number;
  s: number;
  l: number;
}

const format = ({ h, s, l }: Hsl) => `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;

const hexToHslComponents = (hexColor: string): Hsl => {
  let hex = hexColor.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const bigint = parseInt(hex, 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const diff = max - min;
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      default:
        h = (r - g) / diff + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  };
};

const adjustLightness = (hsl: Hsl, amount: number): Hsl => ({
  ...hsl,
  l: clamp(hsl.l + amount, 0, 100),
});

const getForeground = (l: number) => (l > 60 ? "0 0% 15%" : "0 0% 98%");

export const getRestaurantThemeVariables = ({
  primaryColor,
  secondaryColor,
  accentColor,
  surfaceColor,
}: {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  surfaceColor: string;
}) => {
  const primary = hexToHslComponents(primaryColor);
  const secondary = hexToHslComponents(secondaryColor);
  const accent = hexToHslComponents(accentColor);
  const surface = hexToHslComponents(surfaceColor);
  const muted = adjustLightness(surface, 6);

  return {
    "--background": format(surface),
    "--foreground": getForeground(surface.l),
    "--card": format(surface),
    "--card-foreground": getForeground(surface.l),
    "--popover": format(surface),
    "--popover-foreground": getForeground(surface.l),
    "--primary": format(primary),
    "--primary-foreground": getForeground(primary.l),
    "--secondary": format(secondary),
    "--secondary-foreground": getForeground(secondary.l),
    "--accent": format(accent),
    "--accent-foreground": getForeground(accent.l),
    "--muted": format(muted),
    "--muted-foreground": getForeground(muted.l),
    "--border": format(adjustLightness(surface, -10)),
    "--input": format(adjustLightness(surface, -8)),
    "--ring": format(primary),
  } as Record<string, string>;
};
