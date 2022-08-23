import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isDesktop = screenWidth > 479;

  return (
    <div
      className="
        flex flex-wrap justify-center
        xl:py-32
      "
    >
      <div
        className="
        flex flex-wrap justify-center align-middle items-center
        h-fit w-full p-[6.25%]
        font-plexSans
        animate-gradient-xy bg-gradient-to-r from-pink-500 via-purple-500 to-offTeal shadow-inner
        lg:py-52 xl:w-1000 xl:rounded-lg
      "
      >
        <div className="flex justify-center w-full">
          <Tilt
            tiltEnable={isDesktop}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="white"
            glarePosition="top"
            glareBorderRadius="24px"
            transition={true}
            transitionEasing="cubic-bezier(.17,.67,.83,.67)"
            className="w-full max-w-xl"
          >
            <div
              className="
              relative
              h-fit rounded-3xl bg-clip-padding
            bg-offWhite/50 border border-offWhite backdrop-filter backdrop-blur-xl shadow-lg
            "
            >
              <div className="divide-y">
                <div
                  className="
                  flex justify-center
                  w-full h-fit py-16 
                  sm:py-24 sm:pr-[6.25%]
                  md:py-32
                "
                >
                  <span
                    className="
                    text-32 text-offBlack font-black
                    sm:text-40 md:text-48
                  "
                  >
                    <span className="drop-shadow-md">👋</span> Hello, world.
                  </span>
                </div>

                <div
                  className="
                  flex flex-wrap justify-center
                  h-full w-full px-24 py-32 pb-40
                bg-offWhite/50 rounded-b-3xl
                "
                >
                  {isDesktop ? (
                    <ul
                      className="
                      list-inside list-none
                      text-offBlack/60 space-y-24
                    "
                    >
                      <li className="text-28 md:text-32">
                        <div className="inline-block text-center justify-center w-fit">
                          <span className="">My name is </span>
                          <span className="inline-block font-black text-offBlack text-center">
                            Evan C. Navarro
                            <span className="text-offGray font-normal">.</span>
                          </span>
                        </div>
                      </li>
                      <li className="text-28 md:text-32">
                        <div className="inline-block">
                          <span className="">I&apos;m a </span>
                          <span className="inline-block font-black text-offBlack text-center">
                            Jr. Product Designer
                            <span className="text-offGray font-normal">.</span>
                          </span>
                        </div>
                      </li>
                      <li className="text-28 md:text-32">
                        <span className="mr-4">Based out of </span>
                        <span className="font-black text-offBlack">
                          Orlando, FL
                        </span>
                        <span>.</span>
                      </li>
                      {/* <li className="text-12 space-x-8">
                        <span className="text-16 text-black font-bold">
                          [*: {screenWidth}]
                        </span>
                        <span>
                          sm.480 / md.640 / lg.800 / xl.1000 / 2xl.1200
                        </span>
                      </li> */}
                    </ul>
                  ) : (
                    <div className="flex flex-wrap justify-center">
                      <div className="text-offBlack/60 space-x-8 text-28 px-4">
                        <span className="">
                          My name is <b className="text-offBlack">Evan</b>. I&apos;m
                          a{" "}
                          <b className="text-offBlack">Jr. Product Designer</b>,
                          based in <b className="text-offBlack">Orlando, FL</b>.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* <div
          className="h-360 w-400 relative rounded-3xl bg-clip-padding p-20 m-16
        bg-offWhite border border-offWhite backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-lg
        "
        >
          <div className="bg-black w-fit h-fit rounded-xl"></div>
        </div> */}
      </div>
    </div>
  );
}
