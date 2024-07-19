"use client";
//Import next fuctions
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
//Import react fuctions
import { useState } from "react";
//Import images
import logo from "../../assets/images/logo.png";
import logoResponsive from "../../assets/images/logoResponsive.png";
//Import svg icons
import { LogoSvgIcon } from "@/utils/SvgIcons";
import { resolve } from "styled-jsx/css";
export default function Nav() {
  const router = useRouter();
  const routerName = usePathname();
  const validateRouteLogo =
    routerName == "/" || routerName == "/contacts" || routerName == "/studio";
  const validateRouteFixed = routerName == "/" || routerName == "/contacts";

  const [loading, SetLoading] = useState(false);
  const [addFixed, SetAddFixed] = useState(false);
  const [stringAmimation, setStringAmimation] = useState("");

  function sleep(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds);
    });
  }

  const handleTransitios = async (e, href, text) => {
    e.preventDefault();
    setStringAmimation(text);
    SetLoading(true);
    await sleep(2500);
    router.push(href);
    SetLoading(false);
  };

  return (
    <>
      <div
        className={` ${addFixed && "md:fixed"} ${
          validateRouteFixed
            ? "block md:flex md:fixed"
            : "block md:flex md:ms-5"
        } top-0 left-6 right-0 mt-10`}
      >
        {validateRouteLogo && (
          <Link href="/" onClick={(e) => {
            handleTransitios(e, "/", "HOME");
          }} className="hidden md:block">
            <LogoSvgIcon
              className="img-logo--nav"
              viewBox="0 0 399.000000 217.000000"
              color={"#ff3300"}
            />
          </Link>
        )}

        <nav className="hidden md:flex justify-between  uppercase grow px-md-8">
          <Link
            onClick={(e) => {
              handleTransitios(e, "/studio", "STUDIO");
            }}
            href="/studio"
            className="btn-flip"
            data-back="Studio"
            data-front="Studio"
          ></Link>
          <Link
            onClick={(e) => {
              handleTransitios(e, "/exp", "EXP");
            }}
            href="/exp"
            className="btn-flip"
            data-back="Exp"
            data-front="Exp"
          ></Link>
          <Link
            onClick={(e) => {
              handleTransitios(e, "/contacts", "CONTACT");
            }}
            href="/contacts"
            className="btn-flip"
            data-back="Contact"
            data-front="Contact"
          ></Link>
        </nav>
        <nav className="flex md:hidden justify-between  uppercase grow px-md-8">
          <Link
            href="/studio"
            className="btn-flip"
            data-back="Studio"
            data-front="Studio"
          ></Link>
          <Link
            href="/exp"
            className="btn-flip"
            data-back="Exp"
            data-front="Exp"
          ></Link>
          <Link
            href="/contacts"
            className="btn-flip"
            data-back="Contact"
            data-front="Contact"
          ></Link>
        </nav>
        <Link
          href="/"
          className="text-8xl  md:hidden logo-size text-center mt-10 flex justify-center"
        >
          <Image src={logoResponsive} width={300} alt="Logo 913Studio"></Image>
        </Link>
      </div>
      {loading && (
        <>
          <div className="fixed up top-0 ps-3 right-0 pt-10">
            <div className="flex">
              <LogoSvgIcon
                className="img-logo--animating"
                viewBox="0 0 399.000000 217.000000"
                color={"#ff3300"}
              />
            </div>
            <div
              className={`flex  px-4 md:px-7  md:fixed mt-10 bottom-0 left-0 right-0 `}
            >
              <div></div>
              <div className="grow  text-end hidden md:flex justify-end ">
                <p className="logo-size">{stringAmimation}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
