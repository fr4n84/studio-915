"use client";
//import next fuctions
import Image from "next/image";
//Import images
import images from "../images";
// Import own components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer/Footer";
import CarrucelResponsive from "@/components/carrucels/CarrucelResponsive";
import React, {useState, useEffect, Suspense} from "react";
import useMediaQuery from "@/hook/MediaScreen";

const CarrucelLoop = React.lazy(() =>
  import("@/components/carrucels/carrucelLoop")
);

export default function Home() {
  const isLargeScreen = useMediaQuery("(min-width: 750px)"); // Puedes ajustar este valor según tus necesidades
  const [shouldLoadLargeComponent, setShouldLoadLargeComponent] =
    useState(false);

  useEffect(() => {
    if (isLargeScreen) {
      setShouldLoadLargeComponent(true);
    }
  }, [isLargeScreen]);
  return (
    <>
      <Nav />

      {shouldLoadLargeComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <CarrucelLoop />
        </Suspense>
      )}

      <Footer />
      <div className="mt-20 md:hidden">
        <CarrucelResponsive />
      </div>
    </>
  );
}
