// Import own components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import CarrucelResponsive from "@/components/carrucels/CarrucelResponsive";
import CarrucelLoop from "@/components/carrucels/CarrucelLoop";

export default function RootPage() { 
  return (
    <>
      <Nav />

      <CarrucelLoop />

      <Footer />
      <div className="mt-20 md:hidden">
        <CarrucelResponsive />
      </div>
    </>
  );
}
