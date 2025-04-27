import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins, Rubik, Nunito } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Centro Rincón de Amigos",
  description: "Portal Web CRA - Puertas abiertas al encuentro barrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.className} ${rubik.variable} ${nunito.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
