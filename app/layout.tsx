import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyApp from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JopLive",
  description:
    "Jeux Olympiques Paris 2024 - JopLive - Suivez les Jeux Olympiques en direct",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
