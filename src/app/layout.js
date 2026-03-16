import { Geist, Geist_Mono, Anton, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable:"--font-anton",
  weight: "400",
  subsets: ["latin"],
})

const manrope = Manrope ({
  variable:"--font-manrope",
  weight:["400","500","700"],
  subsets: ["latin"]
})

export const metadata = {
  title: "LES PETITS PLATS",
  description: "Une application qui vous permet de trouver des recettes en fonction des ingrédients que vous sélectionnez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
