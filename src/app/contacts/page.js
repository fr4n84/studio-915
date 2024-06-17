import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import { Grid } from "@mui/material";

//Import next fuction
import Image from "next/image";


import img5 from "../../assets/images/img5.jpg";

export default function contacts() {
  return (
    <>
      <Nav />
      <Grid className="position-contact" container spacing={2}>
        <Grid item xs={7} className="mt-10">
          <p>
            CREAMOS Y REALIZAMOS EXPERIENCIAS CONCRETAS SIGUIENDO NUESTRA
            VISIÓN. NUESTRO INSTINTO Y ENTENDIENDO LAS NECESIDADES DEL CLIENTE,
            DEMOSTRANDO QUE CADA MARCA SIEMPRE PUEDE CRECER Y SEGUIR
            DESARROLLÁNDOSE.
          </p>
        </Grid>
        <Grid item xs={5}>
        
        <Image height={900} width={600} src={img5} alt="" />
        
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
