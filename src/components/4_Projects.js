import Link from "next/link";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import emojiCall from "/public/images/emojis/call.png";
import emojiHeart from "/public/images/emojis/heart.png";
import emojiFolder from "/public/images/emojis/folder.png";
import emojiFigma from "/public/images/emojis/figma.png";
import logoReact from "/public/images/logos/react.svg";

import logoFamilyChat from "/public/images/logos/familychat.png";
import coverFamilyChat from "/public/images/familychat.png";

import logoObjectively from "/public/images/logos/objectively.png";
import logoKeymorph from "/public/images/logos/keymorph.png";
import logoEvanCNavarro from "/public/images/logos/evancnavarro.png";

export default function Projects() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const biggerThan480 = screenWidth > 479;

  return (
    <div
      id="projects"
      className="
        flex flex-wrap justify-center
        h-fit w-full
      "
    >
      <div
        className="
          h-fit w-1000 py-64 space-y-32
          bg-white
        "
      >
        <div
          className="
            px-20 space-y-32
            xl:px-0
          "
        >
          <hr
            className="
              h-4 w-100
              bg-offTeal
            "
          />

          <div
            className="
              group
              w-full
              rounded space-x-24
            text-offBlack text-40 font-black font-plexMono
              md:text-48
            "
          >
            <span className="">Projects</span>
            <Link href="#projects">
              <a className="">
                <span
                  className="
                    h-fit px-16
                    bg-offPaper/50 rounded
                    font-plexSans text-offGray
                    opacity-0 group-hover:opacity-100 hover:text-offBlack hover:bg-offPaper
                  "
                >
                  #
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="
            flex flex-wrap justify-center w-full
          "
        >
          <div
            className="
              flex flex-wrap justify-center align-middle items-center
              h-fit w-full p-[6.25%] space-y-64
              font-plexSans text-16
              bg-gradient-to-b from-offTeal to-purple-500 shadow-inner
              lg:py-52
            "
          >
            <div className="flex justify-center w-full max-w-[1000px]">
              <div
                className="
                  group relative
                  flex flex-wrap
                  h-full w-full rounded-3xl bg-clip-padding
                bg-offWhite/50 border border-offWhite backdrop-filter backdrop-blur-xl shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl translate ease-in-out duration-200
                "
              >
                <div
                  className="
                    flex flex-wrap
                    w-full overflow-hidden
                    rounded-t-3xl bg-black
                    lg:rounded-tr-none lg:rounded-l-3xl lg:w-1/3
                  "
                >
                  FamilyChat
                  {/* <div className="relative w-480 h-full">
                    <Image
                      src={coverFamilyChat}
                      alt="FamilyChat Project Card Banner"
                      placeholder="blur"
                      objectFit="cover"
                      className=""
                    />
                  </div> */}
                </div>

                <div
                  className="
                    flex flex-wrap justify-start
                    w-full px-32 py-32 space-y-20
                  bg-offWhite rounded-b-3xl
                  group-hover:bg-white translate ease-in-out duration-200
                  lg:w-2/3 lg:rounded-r-3xl lg:rounded-bl-none
                  "
                >
                  <div
                    className="
                      flex flex-wrap justify-start space-y-16
                      sm:p-16
                    "
                  >
                    <div className="flex flex-wrap align-middle items-center space-x-24">
                      {biggerThan480 ? (
                        <div className="translate ease-in-out duration-200 drop-shadow-md">
                          <Image
                            src={logoFamilyChat}
                            alt="FamilyChat Logo"
                            width={"60%"}
                            height={"60%"}
                            objectFit="contain"
                            className="rounded-xl"
                          />
                        </div>
                      ) : null}
                      <span
                        className="
                        font-bold text-36
                        sm:text-44
                      "
                      >
                        FamilyChat
                      </span>
                    </div>
                    <span className="text-offGray text-20 sm:text-28">
                      Mobile chat application created for families; pairing five
                      interactive features, alongside standard messaging
                      functionality.
                    </span>
                  </div>
                  {biggerThan480 ? (
                    <div
                      className="
                        flex flex-wrap justify-start space-x-16
                        w-full
                        text-offWhite font-normal font-plexMono
                        group-hover:text-white
                      "
                    >
                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16 ml-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UX Research
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UI Design
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Design System
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Figma
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          React Native
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Expo
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Firebase
                        </span>
                      </div>

                      <div
                        className="
                            flex justify-center text-center align-middle items-center
                            w-fit h-fit px-16 py-8 mb-16
                            bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Mobile
                        </span>
                      </div>

                      <div
                        className="
                            flex justify-center text-center align-middle items-center
                            w-fit h-fit px-16 py-8 mb-16
                            bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          iOS
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap justify-start w-full sm:w-fit">
                    <Link href="projects/familychat">
                      <a className="w-full">
                        {/* <a target="_blank" rel="noopener noreferrer" className=""> */}
                        <button
                          className="
                            px-24 py-12 mt-16 w-full max-w-400
                            flex justify-center items-center space-x-4
                            bg-offBlack text-white text-16 font-bold font-plexMono
                            rounded-lg outline-none
                            hover:bg-offBlack/80 group-hover:shadow-lg
                            sm:ml-16
                          "
                        >
                          <span>View Case Study</span>

                          <div className="flex">
                            <FiChevronRight
                              size={20}
                              className="
                                translate ease-in-out duration-200
                                group-hover:translate-x-1 group-hover:opacity-0
                              "
                            />

                            <FiArrowRight
                              size={20}
                              className="
                                flex absolute
                                translate ease-in-out duration-200 opacity-0 -translate-x-1
                                group-hover:translate-x-1 group-hover:opacity-100
                              "
                            />
                          </div>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full max-w-[1000px]">
              <div
                className="
                  group relative
                  flex flex-wrap
                  h-full w-full rounded-3xl bg-clip-padding
                bg-offWhite/50 border border-offWhite backdrop-filter backdrop-blur-xl shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl translate ease-in-out duration-200 
                "
              >
                <div
                  className="
                    flex flex-wrap
                    w-full overflow-hidden
                    rounded-t-3xl bg-black
                    lg:rounded-tr-none lg:rounded-l-3xl lg:w-1/3
                  "
                >
                  Objectively
                  {/* <div className="relative w-480 h-full">
                    <Image
                      src={coverFamilyChat}
                      alt="FamilyChat Project Card Banner"
                      placeholder="blur"
                      objectFit="cover"
                      className=""
                    />
                  </div> */}
                </div>

                <div
                  className="
                    flex flex-wrap justify-start
                    w-full px-32 py-32 space-y-20
                  bg-offWhite rounded-b-3xl
                  group-hover:bg-white translate ease-in-out duration-200
                  lg:w-2/3 lg:rounded-r-3xl lg:rounded-bl-none
                  "
                >
                  <div
                    className="
                      flex flex-wrap justify-start space-y-16
                      sm:p-16
                    "
                  >
                    <div className="flex flex-wrap align-middle items-center space-x-24">
                      {biggerThan480 ? (
                        <div className="translate ease-in-out duration-200 drop-shadow-md">
                          <Image
                            src={logoObjectively}
                            alt="FamilyChat Logo"
                            width={"60%"}
                            height={"60%"}
                            objectFit="contain"
                            className="rounded-xl"
                          />
                        </div>
                      ) : null}
                      <span
                        className="
                        font-bold text-36
                        sm:text-44
                      "
                      >
                        Objectively
                      </span>
                    </div>
                    <span className="text-offGray text-20 sm:text-28">
                      The &quot;deliberation platform&quot; helping host
                      political discussion between academics, popular figures,
                      and political pundits.
                    </span>
                  </div>
                  {biggerThan480 ? (
                    <div
                      className="
                        flex flex-wrap justify-start space-x-16
                        w-full
                        text-offWhite font-normal font-plexMono
                        group-hover:text-white
                      "
                    >
                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16 ml-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UX Research
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          User Personas
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Design System
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Figma
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Component Library
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Improvements
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          VueJS
                        </span>
                      </div>

                      <div
                        className="
                            flex justify-center text-center align-middle items-center
                            w-fit h-fit px-16 py-8 mb-16
                            bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Front-End
                        </span>
                      </div>

                      <div
                        className="
                            flex justify-center text-center align-middle items-center
                            w-fit h-fit px-16 py-8 mb-16
                            bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Web Dev
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap justify-start w-full sm:w-fit">
                    <Link href="projects/objectively">
                      <a className="w-full">
                        {/* <a target="_blank" rel="noopener noreferrer" className=""> */}
                        <button
                          className="
                            px-24 py-12 mt-16 w-full max-w-400
                            flex justify-center items-center space-x-4
                            bg-offBlack text-white text-16 font-bold font-plexMono
                            rounded-lg outline-none
                            hover:bg-offBlack/80 group-hover:shadow-lg
                            sm:ml-16
                          "
                        >
                          <span>View Case Study</span>

                          <div className="flex">
                            <FiChevronRight
                              size={20}
                              className="
                                translate ease-in-out duration-200
                                group-hover:translate-x-1 group-hover:opacity-0
                              "
                            />

                            <FiArrowRight
                              size={20}
                              className="
                                flex absolute
                                translate ease-in-out duration-200 opacity-0 -translate-x-1
                                group-hover:translate-x-1 group-hover:opacity-100
                              "
                            />
                          </div>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full max-w-[1000px]">
              <div
                className="
                  group relative
                  flex flex-wrap
                  h-full w-full rounded-3xl bg-clip-padding
                bg-offWhite/50 border border-offWhite backdrop-filter backdrop-blur-xl shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl translate ease-in-out duration-200
                "
              >
                <div
                  className="
                    flex flex-wrap
                    w-full overflow-hidden
                    rounded-t-3xl bg-black
                    lg:rounded-tr-none lg:rounded-l-3xl lg:w-1/3
                  "
                >
                  Keymorph
                  {/* <div className="relative w-480 h-full">
                    <Image
                      src={coverFamilyChat}
                      alt="FamilyChat Project Card Banner"
                      placeholder="blur"
                      objectFit="cover"
                      className=""
                    />
                  </div> */}
                </div>

                <div
                  className="
                    flex flex-wrap justify-start
                    w-full px-32 py-32 space-y-20
                  bg-offWhite rounded-b-3xl
                  group-hover:bg-white translate ease-in-out duration-200
                  lg:w-2/3 lg:rounded-r-3xl lg:rounded-bl-none
                  "
                >
                  <div
                    className="
                      flex flex-wrap justify-start space-y-16
                      sm:p-16
                    "
                  >
                    <div className="flex flex-wrap align-middle items-center space-x-24">
                      {biggerThan480 ? (
                        <div className="translate ease-in-out duration-200 drop-shadow-md">
                          <Image
                            src={logoKeymorph}
                            alt="Keymorph Logo"
                            width={"60%"}
                            height={"60%"}
                            objectFit="contain"
                            className="rounded-xl"
                          />
                        </div>
                      ) : null}
                      <span
                        className="
                        font-bold text-36
                        sm:text-44
                      "
                      >
                        Keymorph
                      </span>
                    </div>
                    <span className="text-offGray text-20 sm:text-28">
                      Micro development collective, comprised of UCF alumni,
                      creating open-source apps under a unified brand.
                    </span>
                  </div>
                  {biggerThan480 ? (
                    <div
                      className="
                        flex flex-wrap justify-start space-x-16
                        w-full
                        text-offWhite font-normal font-plexMono
                        group-hover:text-white
                      "
                    >
                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16 ml-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UX Principles
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UI Design
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Design System
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Figma
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Mobile First
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          NextJS
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Vercel
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          CosmosDB
                        </span>
                      </div>

                      <div
                        className="
                            flex justify-center text-center align-middle items-center
                            w-fit h-fit px-16 py-8 mb-16
                            bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Web Dev
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap justify-start w-full sm:w-fit">
                    <Link href="projects/keymorph">
                      <a className="w-full">
                        {/* <a target="_blank" rel="noopener noreferrer" className=""> */}
                        <button
                          className="
                            px-24 py-12 mt-16 w-full max-w-400
                            flex justify-center items-center space-x-4
                            bg-offBlack text-white text-16 font-bold font-plexMono
                            rounded-lg outline-none
                            hover:bg-offBlack/80 group-hover:shadow-lg
                            sm:ml-16
                          "
                        >
                          <span>View Case Study</span>

                          <div className="flex">
                            <FiChevronRight
                              size={20}
                              className="
                                translate ease-in-out duration-200
                                group-hover:translate-x-1 group-hover:opacity-0
                              "
                            />

                            <FiArrowRight
                              size={20}
                              className="
                                flex absolute
                                translate ease-in-out duration-200 opacity-0 -translate-x-1
                                group-hover:translate-x-1 group-hover:opacity-100
                              "
                            />
                          </div>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full max-w-[1000px]">
              <div
                className="
                  group relative
                  flex flex-wrap
                  h-full w-full rounded-3xl bg-clip-padding
                bg-offWhite/50 border border-offWhite backdrop-filter backdrop-blur-xl shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl translate ease-in-out duration-200
                "
              >
                <div
                  className="
                    flex flex-wrap
                    w-full overflow-hidden
                    rounded-t-3xl bg-black
                    lg:rounded-tr-none lg:rounded-l-3xl lg:w-1/3
                  "
                >
                  Design Snippets
                  {/* <div className="relative w-480 h-full">
                    <Image
                      src={coverFamilyChat}
                      alt="FamilyChat Project Card Banner"
                      placeholder="blur"
                      objectFit="cover"
                      className=""
                    />
                  </div> */}
                </div>

                <div
                  className="
                    flex flex-wrap justify-start
                    w-full px-32 py-32 space-y-20
                  bg-offWhite rounded-b-3xl
                  group-hover:bg-white translate ease-in-out duration-200
                  lg:w-2/3 lg:rounded-r-3xl lg:rounded-bl-none
                  "
                >
                  <div
                    className="
                      flex flex-wrap justify-start space-y-16
                      sm:p-16
                    "
                  >
                    <div className="flex flex-wrap align-middle items-center space-x-24">
                      {biggerThan480 ? (
                        <div className="translate ease-in-out duration-200 drop-shadow-md">
                          <Image
                            src={logoEvanCNavarro}
                            alt="Evan C. Navarro's Emoji Logo"
                            width={"60%"}
                            height={"60%"}
                            objectFit="contain"
                            className="rounded-xl"
                          />
                        </div>
                      ) : null}
                      <span
                        className="
                        font-bold text-36
                        sm:text-44
                      "
                      >
                        Snippets
                      </span>
                    </div>
                    <span className="text-offGray text-20 sm:text-28">
                      Random design snippets from projects, school assignments,
                      and client work.
                    </span>
                  </div>
                  {biggerThan480 ? (
                    <div
                      className="
                        flex flex-wrap justify-start space-x-16
                        w-full
                        text-offWhite font-normal font-plexMono
                        group-hover:text-white
                      "
                    >
                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16 ml-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          UI Prototyping
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Graphic Design
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Logofolio
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Illustration
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Photography
                        </span>
                      </div>

                      <div
                        className="
                          flex justify-center text-center align-middle items-center
                          w-fit h-fit px-16 py-8 mb-16
                          bg-offGray
                          rounded-full
                        "
                      >
                        <span
                          className="
                          "
                        >
                          Figma
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap justify-start w-full sm:w-fit">
                    <Link href="projects/snippets">
                      <a className="w-full">
                        {/* <a target="_blank" rel="noopener noreferrer" className=""> */}
                        <button
                          className="
                            px-24 py-12 mt-16 w-full max-w-400
                            flex justify-center items-center space-x-4
                            bg-offBlack text-white text-16 font-bold font-plexMono
                            rounded-lg outline-none
                            hover:bg-offBlack/80 group-hover:shadow-lg
                            sm:ml-16
                          "
                        >
                          <span>View Case Study</span>

                          <div className="flex">
                            <FiChevronRight
                              size={20}
                              className="
                                translate ease-in-out duration-200
                                group-hover:translate-x-1 group-hover:opacity-0
                              "
                            />

                            <FiArrowRight
                              size={20}
                              className="
                                flex absolute
                                translate ease-in-out duration-200 opacity-0 -translate-x-1
                                group-hover:translate-x-1 group-hover:opacity-100
                              "
                            />
                          </div>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
