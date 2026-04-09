import { brandConfig } from "@/config/brand";

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "es_MX",
  defaultTitle: brandConfig.name,
  titleTemplate: `%s | ${brandConfig.name}`,
  description:
    "Template principal para lanzar landings, sitios institucionales, SPAs ligeras y futuros SaaS con una base limpia, reusable y escalable.",
  keywords: [
    "next.js",
    "template base",
    "landing page",
    "spa",
    "saas ligero",
    "tailwind css",
    "typescript",
  ],
  ogImage: "/media/og-default.svg",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Estructura", href: "/#structure" },
    { label: "Admin", href: "/admin" },
  ] satisfies NavigationItem[],
} as const;
