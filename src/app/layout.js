import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { StateProvider } from "./providers/StateProvider";

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
  description: "Une application qui permet de trouver des recettes en fonction des ingrédients que vous sélectionnez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} ${manrope.variable}`}>
        <header>
          <Header/>
        </header>
        <main>
          <StateProvider>
            {children}
          </StateProvider>
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
