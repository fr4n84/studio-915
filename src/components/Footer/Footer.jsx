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
          <p className="size-left lg:ms-12">
            SOMOS STUDIO 9.13, UN GRUPO DE CREATIVOS ENFOCADO EN CONECTAR TALENTO
            CON MARCAS Y EMPRESAS APORTANDO NUESTRA VISIÓN E IDEAS. <br />{" "}
            TRABAJAMOS DE MANERA CONJUNTA CON DIFERENTES ARTISTAS PARA DIFUNDIR
            LA CULTURA Y LA ESTÉTICA, APORTANDO SOLUCIONES CREATIVAS Y
            FUNCIONALES PARA MEJORAR LA COMUNICACIÓN DE LAS MARCAS. PROYECTOS
            HECHOS A MEDIDA ENTENDIENDO LA SOCIEDAD EN 2024.
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
        <footer className="grow  text-end hidden md:flex justify-end ">
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
