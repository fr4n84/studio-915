"use client";
//Import next fuctions
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
//Import images
import logoFooter from "../../assets/images/logoFooter.png";

export default function Footer() {
  const routerName = usePathname();
  const currentRouter =  routerName == "/studio";
  const contactRouter = routerName == "/contacts";
  const homeRouter = routerName == "/";
  const studioRouter = routerName == "/studio";
  return (
    <>
      <div
        className={`flex  px-4 md:px-7 ${
          currentRouter ? "mt-5" : "md:fixed mt-10"
        } bottom-0 left-0 right-0 `}>
        {homeRouter && (
          <p className="size-left ">
            AL IGUAL QUE NOSOTROS AL PRINCIPIO, LAS AGENCIAS SUELEN PONER UN TEXTO AQUÍ
CON UN VOCABULARIO ABURRIDO Y COMPLEJO, SUPONGO QUE CON EL FIN DE PARECER GRANDES EXPERTOS.
VAYAMOS AL GRANO: SOMOS UN GRUPO DE CREATIVOS ENFOCADOS EN CREAR IDEAS Y ESTRATEGIAS
QUE CONECTEN TU NEGOCIO CON LA GENTE JOVEN, REALIZANDO PROYECTOS A MEDIDA,
ENTENDIENDO LO QUE DEMANDA LA SOCIEDAD EN LA ACTUALIDAD Y TRABAJANDO EN CONJUNTO CON PROFESIONALES
DE DISTINTAS ÁREAS PARA OBTENER RESULTADOS TOP. SOMOS GENTE CURIOSA, ANALÍTICA Y RESOLUTIVA;
LO QUE MÁS NOS GUSTA ES PENSAR.
          </p>
        )}
        {studioRouter && (
          <span className="size-left line-height_size mb-5 mb-md-0">
            <p>DIRECCIÓN CREATIVA</p>
            <p> DISEÑO 3D</p>
            <p>DISEÑO GRÁFICO</p>
            <p>PRODUCCIÓN AUDIOVISUAL </p>
            <p>(FOTOGRAFÍA Y VÍDEO)</p>
            <p>IDENTIDAD DE MARCA</p>
            <p>COPY</p>
            <p>GROWTH PARTNER</p>
          </span>
        )}
        {contactRouter && (
          <span className="size-contact">
            <p>Info@the913studio.com</p>
            <p> 644274891</p>
            <p>IG: studio.9.13</p>
            <p>Linkedin: Studio 9.13</p>
          </span>
        )}
        <footer className="grow  text-end hidden md:flex justify-end items-end">
          <Image
            height={500}
            width={600}
            className="img-logo--footer"
            objectFit="cover"
            src={logoFooter}
            alt=""></Image>
        </footer>
      </div>
    </>
  );
}
