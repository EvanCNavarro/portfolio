import Link from "next/link";
import { useState, useEffect } from "react";
import { MdInfoOutline } from "react-icons/md";
import { Tooltip, Grid } from "@nextui-org/react";
// import { WorkTooltip } from "../components/WorkTooltip";

import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

import {
  FiChevronRight,
  FiArrowUpRight,
  FiCornerRightDown,
} from "react-icons/fi";

export default function SiteInformation() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isDesktop = screenWidth > 799;

  return (
    <div
      className="
          flex flex-wrap justify-center items-center align-items
          w-full py-12
          bg-offPaper 
        "
    >
      <div
        className="
          flex flex-wrap justify-center items-center align-items
          w-full max-w-[1000px]
          lg:justify-end lg:pr-20 xl:pr-0
        "
      >
        <Grid className="group cursor-help">
          <Tooltip
            color="invert"
            content={
              <div
                className="
                  flex flex-wrap 
                  w-232 h-fit p-16
                  text-16
                "
              >
                <div className="flex flex-wrap w-full justify-between">
                  <span className="flex w-fit h-fit text-16 font-black align-middle items-center">
                    [ Version 1.3 ]
                  </span>
                  <div className="flex w-fit h-fit align-middle items-center">
                    <Link href="https://github.com/EvanCNavarro/portfolio/commits/main">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                        "
                      >
                        <span
                          className="
                            text-white font-bold underline decoration-white underline-offset-8
                            transition ease-in-out duration-200
                          "
                        >
                          <div className="underline decoration-white underline-offset-8">
                            <SiGithub
                              size={20}
                              className="inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                            />
                            <FiArrowUpRight
                              size={20}
                              className="mx-4 inline-block transition ease-in-out duration-200 group-hover:text-offTeal"
                            />
                          </div>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="w-full border-b-2 border-offTeal my-8" />

                <div className="text-start flex flex-wrap">
                  <span className="pb-24">
                    <i className="">
                      (This site built from scratch, by yours truly, during the
                      months of Aug/Sept 2022)
                    </i>
                  </span>
                  <span>
                    — Coded in <b>Next.js/React</b>, styled with{" "}
                    <b>TailwindCSS</b>, <b>&quot;IBM Plex&quot;</b> as default
                    font, uses <b>React-Icons</b>, and is deployed on{" "}
                    <b>Vercel</b>.
                  </span>
                </div>
              </div>
            }
            enterDelay={150}
            placement={"top"}
            className="cursor-help"
          >
            <div
              className="
                  flex flex-wrap justify-center text-center
                  bg-offWhite/50 p-8 px-12 space-x-8 rounded-md
                  font-bold text-offBlack
                  transition ease-in-out duration-200
                  hover:bg-offWhite hover:shadow-md 
              "
            >
              <div className="flex align-middle items-center">
                <MdInfoOutline
                  size={20}
                  className="inline-block text-offBlack mr-8"
                />
                <span className="flex">Website made with ❤️ by Evan</span>
              </div>
            </div>
          </Tooltip>
        </Grid>
      </div>
    </div>
  );
}
