import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE STRAYS — LEELLA",
  description: "A music video by Leella. Five souls bound by a thousand-year curse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;900&family=Barlow+Condensed:wght@400;600&family=EB+Garamond:ital,wght@1,400;1,500&family=Bebas+Neue&family=Asta+Sans:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
