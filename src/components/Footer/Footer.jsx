'use client'
//Import next fuctions
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const routerName = usePathname();
  const curremRouter = routerName == "/contacts";
  return (
    <>
      <div
        className={`flex mt-10 px-4 md:px-7 ${
          curremRouter ? null : "md:fixed"
        } butom-0 left-0 right-0 `}
      >
        {!curremRouter && (
          <span className="size-left">
            We are ET Studio. We are creative people and every day we work to
            spread beauty by creating holistic experiences that improve people's
            lives through design, copywriting and education.
          </span>
        )}
        {curremRouter && (
          <span className="size-left">
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
        <footer className="grow content-end text-end hidden md:block">
            <p className="logo-size pt-5">STUDIO</p>
        </footer>
      </div>
    </>
  );
}
