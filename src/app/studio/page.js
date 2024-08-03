"use client";
//Import own components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
//Import mui components
import {Grid} from "@mui/material";
//Import lenis
import {ReactLenis} from "lenis/react";
//Import next fuction
import Image from "next/image";
import img5 from "../../assets/images/img5.jpg";
export default function first(second) {
  return (
    <ReactLenis
      syncTouch={true}
      root
      options={{
        orientation: "vertical",
        gestureOrientataion: "both",
      }}>
      <Nav />
      <Grid className="md:px-5 md:pe-7 md:ps-7" container spacing={2}>
        <Grid item xs={12} lg={6}>
          <p className="px-4  mt-7 mb-5 md:mt-11 md:mb-0  md:px-0">
            CREAMOS Y REALIZAMOS EXPERIENCIAS CONCRETAS SIGUIENDO NUESTRA
            VISIÓN Y NUESTRO INSTINTO, ENTENDIENDO LAS NECESIDADES DEL CLIENTE,
            DEMOSTRANDO QUE CADA MARCA SIEMPRE PUEDE CRECER Y SEGUIR
            DESARROLLÁNDOSE.
          </p>
        </Grid>
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <Image
            className="text-end img-position hidden md:block"
            height={900}
            width={240}
            src={img5}
            alt=""
          />
          <Image
            className="text-end block md:hidden"
            height={900}
            width={600}
            src={img5}
            alt=""
          />
        </Grid>
      </Grid>
      <Footer />
      <Grid className="md:px-5 md:pe-7 md:ps-7" container spacing={6}>
        <Grid item xs={12} lg={6} className="mt-14">
          <p className=" text-5xl px-4 mt-7 mb-5 md:mt-0 md:mb-0  md:px-0 font-bold md:text-8xl">
            Diferenciación*
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          justifyContent="center"
          className="md:mt-14 justify-end">
          <p className="font-bold px-4 md:px-0 text-position_contact">
            #CULTURA
          </p>
          <p className="px-4 md:px-0 md:w-2/3 text-position_contact">
           ENTENDEMOS LA CULTURA COMO UNA MANIFESTACIÓN DE
            VALORES, CREENCIAS Y TRADICIONES A TRAVÉS DE SUS PRODUCCIONES
            ARTÍSTICAS. QUIEN ENTIENDE LA CULTURA ENTIENDE LO QUE LA SOCIEDAD
            QUIERE Y LE GUSTA.
          </p>
          <p className="mt-10 font-bold px-4 md:px-0 text-position_contact">
            #IMAGINACIÓN
          </p>
          <p className="px-4 md:px-0 md:w-2/3 text-position_contact">
            NUESTRA PERSPECTIVA DE LA SOCIEDAD Y MUCHAS LLUVIAS DE IDEAS SON EL
            COMIENZO PARA DAR FORMA A UNA IDEA. PENSAR, PARA NOSOTROS NO ES UNA
            PALABRA ABSTRACTA, SI NO UNA VÍA DE ENTRADA A LA CREATIVIDAD Y A
            ENCONTRAR LA COMUNICACIÓN ADECUADA PARA CADA PROYECTO.
          </p>
        </Grid>
        <Grid item xs={12} lg={6} className="md:my-14">
          <p className="font-bold px-4 md:px-0"> #TALENTO </p>
          <p className="px-4 md:px-0 md:w-2/3">
            TRABAJAMOS CON PROFESIONALES DE DISTINTAS ÁREAS PUDIENDO CUBRIR
            CUALQUIER NECESIDAD Y SOLUCIONAR CUALQUIER PROBLEMA QUE TENGA EL
            CLIENTE.
          </p>
          <p className="mt-10 font-bold px-4 md:px-0">#TIEMPO</p>
          <p className="px-4 md:px-0 md:w-2/3">
            EN UNA SOCIEDAD QUE TIENE DEMASIADA PRISA, CADA TRABAJO REQUIERE DE
            UNOS TIEMPOS ADECUADOS PARA SER CONCEBIDOS Y REALIZADOS
            CORRECTAMENTE. EL TIEMPO NO ES LENTITUD, SI NO UNO DE LOS
            COMPONENTES PARA CREAR UN VALOR DIFERENCIAL.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          justifyContent="center"
          className={`md:my-14 positionEnd`}>
          <p className="font-bold px-4 md:px-0 text-position_contact">
            {" "}
            #CURIOSIDAD{" "}
          </p>
          <p className="px-4 md:px-0 md:w-2/3 text-position_contact">
            LA CURIOSIDAD ES UNO DE LOS CAMINOS QUE LLEVA A LA CREATIVIDAD, NOS
            IMPULSA A EXPLORAR NUEVAS MANERAS DE PENSAMIENTO, PERSPECTIVAS Y
            SOLUCIONES. LA CREATIVIDAD FLORECE CUANDO NOS PERMITIMOS CUESTIONAR,
            INVESTIGAR Y DESCUBRIR, LA CURIOSIDAD ES EL MOTOR QUE IMPULSA
            ESTOS PROCESOS.
          </p>
        </Grid>
      </Grid>
    </ReactLenis>
  );
}
