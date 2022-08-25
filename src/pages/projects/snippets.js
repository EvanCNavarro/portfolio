import { useState, useEffect } from "react";
import Link from "next/link";

import ContainerBlock from "../../components/0_ContainerBlock";
import Navbar from "../../components/1A_Navbar";
import Banner from "../../components/1B_Banner";
import ProgressBar from "/src/components/1C_ProgressBar";
import SiteCredits from "/src/components/6A_SiteCredits";
import Footer from "/src/components/6B_Footer";

import {
  FiChevronLeft,
  FiArrowLeft,
  FiChevronRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCornerRightDown,
  FiCornerDownRight,
} from "react-icons/fi";

import Image from "next/image";

import logoFamilyChat from "/public/images/logos/familychat.png";

export default function Keymorph() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const atLeast375 = screenWidth > 374;
  const atLeast476 = screenWidth > 475;

  return (
    <ContainerBlock>
      <Navbar />
      <Banner />
      <ProgressBar />

      <div
        className="
          flex flex-wrap justify-center
          w-full
          font-plexSans font-normal text-16 text-offBlack
        "
      >
        <div
          className="
            flex flex-wrap justify-center space-y-24
            w-full h-fit px-20 pt-24 pb-40
            xl:w-1000 xl:px-0
          "
        >
          <div
            className="
              w-full space-y-24
            "
          >
            <div
              className="
                bg-offWhite rounded-md px-16 pt-20 pb-28 space-y-20
                w-full
                shadow-md
                375:px-24
              "
            >
              <div
                className="
                flex space-x-20 align-middle items-center justify-between
              "
              >
                <span className="flex text-20 text-offGray font-normal font-plexMono">
                  Project 04
                </span>
                <div
                  className="
                    w-fit h-fit px-16 py-4
                    rounded-full
                    bg-offGreen
                    shadow
                  "
                >
                  <span
                    className="
                  text-white font-semibold font-plexMono
                "
                  >
                    ON-GOING
                  </span>
                </div>
              </div>

              <div
                className="
                  items-center space-y-8
                  375:space-y-16 lg:flex lg:justify-between
                "
              >
                <span className="text-44 font-black 375:text-52">Snippets</span>

                <div className="flex">
                  <span
                    className="
                      flex align-middle items-center
                      text-16 text-offGray font-black
                      375:text-20
                    "
                  >
                    🔗 <i className="ml-8">: </i>
                  </span>
                  <span
                    className="
                      group
                      flex align-middle items-center
                      text-16 text-offGray font-black
                      375:text-20
                    "
                  >
                    <i>
                      <Link href="https://ecn.dev/">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          <b className="group ml-8 underline underline-offset-8 text-offBlack group-hover:text-offTeal transition ease-in-out duration-200">
                            https://ecn.dev
                          </b>
                        </a>
                      </Link>
                    </i>
                    <FiArrowUpRight
                      size={atLeast375 ? 20 : 16}
                      className="flex ml-4 text-offBlack group-hover:text-offTeal transition ease-in-out duration-200"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className=" space-y-16">
              <div
                className="
                  w-full h-400 rounded-3xl
                  bg-offTeal
                  drop-shadow-lg
                "
              />

              <div
                className="
                  flex
                  w-fit mx-24
                  text-16 text-offBlack font-normal font-plexMono
                "
              >
                <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                <span className="w-fit">
                  A succint description of image shown above.
                </span>
              </div>
            </div>

            <div
              className="
                pt-24
                lg:px-24
              "
            >
              <div>
                <span className="text-32 font-black 375:text-40">Outcome:</span>
              </div>
              <div>
                <span className="text-20 font-normal 375:text-28">
                  This is a two-sentence detailed explanation of what happened
                  as a result of the project, without too many numbers.
                </span>
              </div>
            </div>
          </div>

          <div
            className="
              w-full
            "
          >
            <Link href="/#projects">
              <a className="w-full flex justify-center 375:justify-start">
                <button
                  className="
                      group
                      px-24 py-12 mt-16 w-full max-w-[13rem]
                      flex justify-center items-center space-x-4
                      text-offBlack text-16 font-bold font-plexMono
                      rounded-lg outline-none
                      bg-offPaper
                      hover:bg-offPaper/80 hover:shadow-md
                    "
                >
                  <div className="flex">
                    <FiChevronLeft
                      size={20}
                      className="
                          translate ease-in-out duration-200
                          group-hover:-translate-x-1 group-hover:opacity-0
                        "
                    />

                    <FiArrowLeft
                      size={20}
                      className="
                          flex absolute
                          translate ease-in-out duration-200 opacity-0 translate-x-1
                          group-hover:-translate-x-1 group-hover:opacity-100
                        "
                    />
                  </div>

                  <span>Back to Home</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </ContainerBlock>
  );
}
