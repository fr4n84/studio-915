"use client";
//Import next fuctions
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
//Import images
import logo from "../../assets/images/logo.png";
export default function Nav() {
  const routerName = usePathname();
  const validateRouteLogo =
    routerName == "/" || routerName == "/contacts" || routerName == "/studio";
  const validateRouteFixed = routerName == "/";
  return (
    <>
      <div
        className={` ${
          validateRouteFixed
            ? "block md:flex md:fixed"
            : "block md:flex md:ms-5"
        } top-0 left-6 right-0 mt-10`}>
        {validateRouteLogo && (
          <Link href="/" className="hidden md:block">
            <Image className="img-logo--nav" src={logo} alt="Estudio"></Image>
          </Link>
        )}

        <nav className="flex justify-between  uppercase grow px-md-8">
          <Link
            href="/studio"
            className="btn-flip"
            data-back="Studio"
            data-front="Studio"></Link>
          <Link
            href="/exp"
            className="btn-flip"
            data-back="Exp"
            data-front="Exp"></Link>
          <Link
            href="/contacts"
            className="btn-flip"
            data-back="Contact"
            data-front="Contact"></Link>
        </nav>
        <Link href="/">
          <h1 className="text-8xl  md:hidden logo-size text-center mt-10">
            913Studio
          </h1>
        </Link>
      </div>
    </>
  );
}
