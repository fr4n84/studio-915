import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import {Grid} from "@mui/material";



export default function contacts() {
  return (
    <>
      
      <Nav />
      <Grid className="md:px-5 md:pe-7" container spacing={2}>
        <Grid item xs={12} lg={12}>
          <h2 className="px-4 mt-7 text-center mb-5 md:mt-0 md:mb-0 uppercase font-bold studio_text-big  md:px-0">
            work with us &quot;
          </h2>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
