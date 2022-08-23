import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { useState, useEffect } from "react";
import siteLogo from "/public/images/logos/Personal_Branding_Portfolio_2022_Logo_V3_Emoji.png";

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isTablet = screenWidth > 639;

  return (
    <>
      <nav
        id="home"
        className="
          inline-flex items-center align-middle justify-center
          w-full h-fit
          font-plexMono
          bg-offPaper drop-shadow-xl border-b border-white
          xl:drop-shadow-none
      "
      >
        <div
          className="
            flex items-center justify-between
            mx-20 my-12 w-1000
            xl:mx-0
          "
        >
          <Link href="/">
            <a className="">
              <button
                className="
                w-fit h-fit p-8
                flex items-center rounded-full justify-center 
                hover:shadow-neumorphism transition-shadow ease-in-out duration-150
              "
              >
                <div className="flex">
                  <Image
                    src={siteLogo}
                    alt="ECN Site Emoji Logo"
                    width={"48%"}
                    height={"48%"}
                    priority={true}
                    placeholder="blur"
                    // objectFit="fill"
                    // objectFit="responsive"
                    // objectFit="intrinsic"
                    // objectFit="fixed"
                    // objectFit="raw"
                    objectFit="contain"
                  />
                </div>
              </button>
            </a>
          </Link>

          <div
            className="
              flex items-center
              h-full
              space-x-24
              xl:space-x-48
            "
          >
            {isTablet ? (
              <div
                className="
                  flex items-center
                  space-x-12
                  xl:space-x-32
                "
              >
                <Link href="#about">
                  <a
                    className="
                    group
                    flex flex-wrap
                    h-48 px-16 rounded-lg
                    hover:shadow-neumorphism hover:drop-shadow-lg

                  "
                  >
                    <span
                      className="
                      decoration-4 decoration-offTeal underline-offset-8
                      group-hover:font-black
                    "
                    >
                      About
                    </span>
                  </a>
                </Link>

                <Link href="#projects">
                  <a
                    className="
                    group
                    flex flex-wrap
                    h-48 px-16 rounded-lg
                    hover:shadow-neumorphism hover:drop-shadow-lg

                  "
                  >
                    <span
                      className="
                      decoration-4 decoration-offTeal underline-offset-8
                      group-hover:font-black
                    "
                    >
                      Projects
                    </span>
                  </a>
                </Link>

                <Link href="#contact">
                  <a
                    className="
                    group
                    flex flex-wrap
                    h-48 px-16 rounded-lg
                    hover:shadow-neumorphism hover:drop-shadow-lg

                  "
                  >
                    <span
                      className="
                      decoration-4 decoration-offTeal underline-offset-8
                      group-hover:font-black
                    "
                    >
                      Contact
                    </span>
                  </a>
                </Link>
              </div>
            ) : null}

            <Link href="https://drive.google.com/file/d/1CpzQ8wOdTfqVPkZcMBwjtdfzGrEyyPkL/view?usp=sharing">
              <a target="_blank" rel="noopener noreferrer" className="">
                <button
                  className="
                  px-24 py-12
                  inline-flex items-center space-x-8
                bg-offBlack text-white text-16 font-bold
                  rounded-lg outline-none
                hover:bg-offBlack/80 hover:shadow-md
                "
                >
                  <span>View Resume</span>
                  <FiArrowUpRight size={20} />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
