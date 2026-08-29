import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garantía Digital Consultores",
  description: "Auditoría y aseguramiento de sistemas de información, seguridad digital e integridad de datos.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
