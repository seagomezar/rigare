import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";
import Nav from "@/app/ui/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rigare SAS",
  description: "En RIGARE nos dedicamos a ofrecer soluciones de bombeo y riego personalizadas para satisfacer las necesidades individuales de cada cliente. Nuestra experiencia y dedicación a la excelencia nos permiten proporcionar equipos y servicios confiables que mejoran tanto la eficiencia en el uso del agua y la energía como el rendimiento general de los sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Header />
      <Nav />
        {children}</body>
    </html>
  );
}
