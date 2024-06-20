"use client";
//Import next fuctions
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Nav() {
  const routerName = usePathname();
  const validateRouteLogo = routerName == "/" || routerName == "/contacts";
  const validateRouteFixed = routerName == "/";
  return (
    <>
      <div
        className={` ${
          validateRouteFixed ? "block md:flex md:fixed" : "flex"
        } top-0 left-6 right-0 mt-10`}>
        {validateRouteLogo && (
          <span className="text-8xl hidden md:inline logo-size">913</span>
        )}

        <nav className="flex justify-between  uppercase grow px-8">
          <Link href="/">
            <span>studio</span>
          </Link>
          <Link href="/exp">
            <span>exp</span>
          </Link>
          <a href="/contacts">
            <span>contact</span>
          </a>
        </nav>
        <h1 className="text-8xl  md:hidden logo-size text-center mt-10">913Studio</h1>
      </div>
    </>
  );
}
