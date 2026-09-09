import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garantía Digital Consultores",
  description: "Procedimientos acordados NISR 4400 y compilación de información tecnológica NISR 4410 en Cartagena de Indias. Conozca nuestro equipo y servicios.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
