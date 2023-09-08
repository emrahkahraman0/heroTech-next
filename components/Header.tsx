"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import HeaderLogo from "/public/headerLogo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  //Menü
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  //Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Active
  const currentRoute = usePathname();

  return (
    <>
      <div id="header" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={HeaderLogo}
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/*header_logo*/}
            <ul className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link className={currentRoute === "/" ? "active" : ""} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/about" ? "active" : ""}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/techStack" ? "active" : ""}
                  href="/techStack"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/projects" ? "active" : ""}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/blog" ? "active" : ""}
                  href="/blog"
                >
                  Blog
                </Link>
                <ul
                  className={`dropdown ${isOpen ? "open" : ""}`}
                  onClick={toggleMenu}
                >
                  <li>
                    <Link
                      className={currentRoute === "/blog" ? "active" : ""}
                      href="/blog"
                    >
                      Blog One
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={currentRoute === "/contact" ? "active" : ""}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/*header_menu*/}
            <ul className="header_social">
              <li>
                <Link href="/">
                  <AiFillGithub />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BiLogoLinkedin />
                </Link>
              </li>
            </ul>
            {/*header_social*/}
            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <LiaBarsSolid className="icon bars" />
              <VscClose className="icon times" />
            </div>
            {/*header_hamburger*/}
          </div>
          {/*header*/}
        </div>
        {/*container*/}
      </div>
      {/*header#*/}
    </>
  );
}

export default Header;
