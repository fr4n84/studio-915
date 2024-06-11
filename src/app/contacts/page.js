import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import { Grid } from "@mui/material";

export default function contacts() {
  return (
    <>
      <Nav />
      <Grid className="position-contact" container spacing={2}>
        <Grid item xs={8}>
          <p>CREAMOS Y REALIZAMOS EXPERIENCIAS CONCRETAS SIGUIENDO NUESTRA VISIÓN.</p>
        </Grid>
        <Grid item xs={4}>
          <p>IMG</p>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
