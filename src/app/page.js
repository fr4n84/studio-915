
//import next fuctions
import Image from "next/image";
//Import images
import images from "../images";
// Import own components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import CarrucelLoop from "@/components/carrucel/carrucelLoop";

export default function Home() {

  
  return (
    <>
    <Nav />
    <CarrucelLoop/>
    <Footer />
    </>
  );
}
