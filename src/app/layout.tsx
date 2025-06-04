import { Saira } from "next/font/google";
import { Header } from "@/components/header/header";
import { useEffect } from "react";
import "./globals.css";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-saira",
});

export const metadata = {
  title: "Pamela Cantaruti",
  description:
    "Portfólio de Pamela Cantaruti — Desenvolvedora Front-End com foco em React, TypeScript e interfaces responsivas. Projetos pessoais e acadêmicos voltados à criação de soluções web modernas e funcionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${saira.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
