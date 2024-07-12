import {Roboto} from "next/font/google";
import "./globals.css";
import Favicon from "../../public/img/favicon.ico";
//Import own components
import CursorAnimate from "@/components/CursorAnimate/CursorAnimate";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "9.13Studio",
  description:
    "SOMOS STUDIO 9.13, UN GRUPO DE CREATIVOS ENFOCADO EN CONECTARTALENTO CON MARCAS Y EMPRESAS APORTANDO NUESTRA VISIÓN E IDEAS.",
  icons: [{rel: "icon", url: Favicon.src}],
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
        <CursorAnimate />
        {children}
      </body>
    </html>
  );
}
