import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import {Grid} from "@mui/material";

//Import next fuction
import Image from "next/image";

import img5 from "../../assets/images/img5.jpg";
export default function first(second) {
  return (
    <>
      <Nav />
      <Grid className="md:px-5 md:pe-7" container spacing={2}>
        <Grid item xs={12} lg={6}>
          <p className="px-4 mt-7 mb-5 md:mt-0 md:mb-0  md:px-0">
            CREAMOS Y REALIZAMOS EXPERIENCIAS CONCRETAS SIGUIENDO NUESTRA
            VISIÓN. NUESTRO INSTINTO Y ENTENDIENDO LAS NECESIDADES DEL CLIENTE,
            DEMOSTRANDO QUE CADA MARCA SIEMPRE PUEDE CRECER Y SEGUIR
            DESARROLLÁNDOSE.
          </p>
        </Grid>
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
        <Image
            className="text-end hidden md:block"
            height={900}
            width={300}
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
    </>
  );
}
