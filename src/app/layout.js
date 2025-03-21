import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Menu from "./apps/Menu/page";
import Navebar from "./componentes/Navebar" ;
import Stock from "./apps/ProductosYServicios/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {/* Contenedor principal que organiza el layout */}
          <div className="flex h-screen">
            {/* Menú lateral */}
            <Navebar />

            {/* Contenido principal que se ajusta automáticamente */}
            <main className="flex-1 p-4 bg-gray-100">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
