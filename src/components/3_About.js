import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import emojiCall from "/public/images/emojis/call.png";
import emojiHeart from "/public/images/emojis/heart.png";
import emojiFolder from "/public/images/emojis/folder.png";
import emojiFigma from "/public/images/emojis/figma.png";
import logoReact from "/public/images/logos/react.svg";
import logoKeymorph from "/public/images/logos/keymorph.svg";

export default function About() {
  return (
    <div
      id="about"
      className="
        flex flex-wrap justify-center relative
        h-fit w-full 
        bg-gradient-to-b from-white to-offWhite
      "
    >
      <div
        className="
          max-w-1000
          px-20 pt-64 space-y-32
          xl:px-0 xl:pt-32 xl:w-1000
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
          <span className="">About</span>
          <Link href="#about">
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

        <div
          className="
          flex flex-wrap justify-start
          font-plexSans font-normal text-32 italic
        "
        >
          <div className="flex flex-wrap justify-center md:text-start xl:space-x-8">
            {/* <div className="text-offGray border-l-4 border-offPaper rounded-r-lg pl-16 pt-16 pb-32"> */}
            <div className="text-offGray text-center border-offPaper rounded-r-lg pt-16 pb-32 xl:text-start xl:pl-0">
              <span className="">
                &quot;My primary goal when designing products is to:{" "}
              </span>
              <span>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-offTeal/20 relative inline-block">
                  <span className="relative text-offBlack font-semibold">
                    digitize empathy
                  </span>
                </span>
                <span className="relative font-normal">.&quot;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
            flex flex-wrap justify-evenly
            h-fit w-full mt-40 mb-64 px-20
            font-plexSans
            xl:w-1000 xl:justify-between xl:px-0
          "
      >
        <div
          className="
            flex justify-center
            h-80 w-280 mb-20 space-x-8
            rounded-full bg-white
            text-20 text-offBlack font-normal
            xl:mb-40
          "
        >
          <span
            className="
              flex items-center justify-center align-middle
              mx-4
              drop-shadow-md
              text-32 
            "
          >
            🎓
          </span>
          <div className="text-center flex items-center">
            <span className="font-bold">Recent Graduate</span>
          </div>
        </div>

        {/* border-white border-dashed border-4 bg-offWhite */}

        <div
          className="
            flex justify-center
            h-80 w-280 mb-20 space-x-8
            rounded-full bg-white
            text-20 text-offBlack font-normal
          "
        >
          <span
            className="
              flex items-center justify-center align-middle
              mx-4
              drop-shadow-md
              text-32 
            "
          >
            👀
          </span>
          <div className="text-center flex items-center">
            <span className="font-bold">Looking for Work</span>
          </div>
        </div>

        <div
          className="
            flex items-center justify-center align-middle
            h-80 w-280 mb-20
            rounded-full bg-white
            text-20 text-offBlack font-normal
          "
        >
          <div className="flex space-x-12">
            <div className="flex align-middle">
              <Image
                src={emojiFigma}
                alt="React.js Logo"
                width={"30%"}
                height={"30%"}
                objectFit="contain"
                className=""
              />
            </div>
            <div className="text-center">
              <span className="">
                <span className="font-bold">Figma</span> Prototyping
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            flex items-center justify-center align-middle
            h-80 w-280 mb-20
            rounded-full bg-white
            text-20 text-offBlack font-normal
          "
        >
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center justify-center align-middle">
              <Image
                src={logoReact}
                alt="React.js Logo"
                width={"48%"}
                height={"48%"}
                objectFit="contain"
                className=""
              />
            </div>
            <div className="text-center">
              <span className="">
                <span className="font-bold">React</span> Development
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            flex justify-center items-center 
            h-80 w-280 mb-20
            rounded-full bg-white
            text-20 text-offBlack font-normal
          "
        >
          <div className="flex justify-center items-center space-x-12">
            <div className="">
              {/* <span className="drop-shadow-md text-32">🖥️</span> */}
              <Image
                src={emojiFolder}
                alt="Folder Emoji"
                width={"38%"}
                height={"38%"}
                objectFit="contain"
                className=""
              />
            </div>
            <div className="text-center">
              <span className="">
                <span className="font-bold">Detail Oriented</span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            flex justify-center
            h-80 w-280 p-24 space-x-8 
            rounded-full bg-white
            text-20 text-offBlack font-normal
          "
        >
          <span
            className="
              flex items-center justify-center align-middle
              mx-4
              drop-shadow-md
              text-32 
            "
          >
            ❤️
          </span>
          <div className="text-center flex items-center">
            <span className="">
              Lover of <span className="font-bold">Kombucha</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
