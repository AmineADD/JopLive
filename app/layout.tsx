import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyApp from "@/app/_app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JopLive",
  description: "Paris 2024 Olympics Experience LIVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
