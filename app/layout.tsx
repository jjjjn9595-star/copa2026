import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Copa 2026 | Jogos do Brasil",
    description: "Tabela demonstrativa de jogos da Seleção Brasileira na Copa 2026.",
    openGraph: {
      title: "Copa 2026 | Jogos do Brasil",
      description: "A torcida começa agora. Confira a agenda demonstrativa da Seleção.",
      locale: "pt_BR",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 816, alt: "Copa 2026 — A torcida começa agora" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Copa 2026 | Jogos do Brasil",
      description: "A torcida começa agora. Confira a agenda demonstrativa da Seleção.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
