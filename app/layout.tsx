import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ['latin-ext'],

 });

export const metadata: Metadata = {
  title: 'A Tu Ritmo - Bienestar Estudiantil',
  description: 'Una campaña pensada para tu bien-estar emocional, ayudándote a enfrentar el estrés académico y a avanzar a tu propio ritmo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}