export const COLORS = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },

  accent: {
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },

  neutral: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
} as const;

export const ANIMATION_DELAYS = {
  navLinks: 0.1,
  navLinksStart: 0.2,
  actions: 0.5,
  mobileLinks: 0.05,
} as const;

export const ANIMATION_DURATIONS = {
  navEnter: 0.5,
  mobileMenu: 0.3,
} as const;

export const NAV_ITEMS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Browse Causes", href: "#causes" },
  { label: "Active Campaigns", href: "#campaigns" },
  { label: "Impact Stories", href: "#stories" },
];
