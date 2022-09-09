import Link from "next/link";
import {
  FiChevronRight,
  FiArrowUpRight,
  FiCornerRightDown,
} from "react-icons/fi";
import { FaKeyboard } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import emojiMailbox from "/public/images/emojis/mailbox.png";
import emojiHeart from "/public/images/emojis/heart.png";
import emojiFolder from "/public/images/emojis/folder.png";
import emojiFigma from "/public/images/emojis/figma.png";
import logoReact from "/public/images/logos/react.svg";
import logoKeymorph from "/public/images/logos/keymorph.svg";
import logoFamilyChat from "/public/images/logos/familychat.png";
import coverFamilyChat from "/public/images/familychat.png";
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

import { IoDocumentText } from "react-icons/io5";

export default function Contact() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const equalTo375 = screenWidth == 375;
  const biggerThan480 = screenWidth > 479;
  const biggerThan600 = screenWidth > 599;
  const biggerThan1000 = screenWidth > 999;

  return (
    <div
      id="contact"
      className="
        flex justify-center
        h-fit w-full
      "
    >
      <div
        className="
          h-fit w-1000 pt-64 pb-40 space-y-32
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
            <span className="">Contact</span>
            <Link href="#contact">
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
              font-plexSans font-normal text-28 text-offGray
              xl:mr-0 md:mr-28 lg:text-32
            "
          >
            {biggerThan1000 ? (
              <>
                <span
                  className="
                    mr-8
                    md:text-32
                  "
                >
                  For an up-to-date listing of my personal skills and previously
                  worked jobs, visit my{" "}
                  <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                    <a target="_blank" rel="noopener noreferrer" className="">
                      <span
                        className="
                      group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal
                  "
                      >
                        LinkedIn
                        <FiArrowUpRight
                          size={biggerThan480 ? 28 : 20}
                          className="mx-4 text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </span>
                    </a>
                  </Link>
                  . Reach out and email me at{" "}
                  <Link href="mailto:hey@ecn.dev" passHref={true}>
                    <a target="_blank" rel="noopener noreferrer" className="">
                      <span
                        className="
                      group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal
                  "
                      >
                        hey@ecn.dev
                        <FiArrowUpRight
                          size={biggerThan480 ? 28 : 20}
                          className="mx-4 text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </span>
                    </a>
                  </Link>{" "}
                  or add me on social media{" "}
                  <span
                    className=" 
                      text-offBlack font-bold 
                    "
                  >
                    @EvanCNavarro
                    <FiCornerRightDown
                      size={biggerThan480 ? 20 : 20}
                      className="mx-4 text-offBlack inline-block group-hover:text-offTeal"
                    />
                  </span>
                </span>
              </>
            ) : (
              <div
                className="
                space-y-32 
            "
              >
                <span
                  className="
                    mr-8
                    md:text-32
                  "
                >
                  For an up-to-date listing of my personal skills and previously
                  worked jobs, visit my{" "}
                  <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                    <a target="_blank" rel="noopener noreferrer" className="">
                      <span
                        className="
                      group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal
                  "
                      >
                        LinkedIn
                        <FiArrowUpRight
                          size={biggerThan480 ? 28 : 20}
                          className="mx-4 text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </span>
                    </a>
                  </Link>
                  .
                </span>

                <span className="inline-block text-24 sm:text-28">
                  Reach out and email me at{" "}
                  <Link href="mailto:hey@ecn.dev" passHref={true} className="">
                    <a target="_blank" rel="noopener noreferrer" className="">
                      <span
                        className="
                      group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal
                  "
                      >
                        hey@ecn.dev
                        <FiArrowUpRight
                          size={biggerThan480 ? 28 : 20}
                          className="mx-4 text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </span>
                    </a>
                  </Link>{" "}
                  or add me on social media{" "}
                  <span
                    className=" 
                      text-offBlack font-semibold sm:text-24 md:text-28
                      
                    "
                  >
                    @EvanCNavarro
                    <FiCornerRightDown
                      size={biggerThan480 ? 20 : equalTo375 ? 8 : 12}
                      className="mx-4 text-offBlack inline-block group-hover:text-offTeal"
                    />
                  </span>
                </span>
              </div>
            )}
          </div>

          {biggerThan600 ? (
            <div
              className="
            flex flex-wrap
            justify-between
            md:space-x-12 lg:space-x-28 tablet:justify-start
            "
            >
              <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  transition ease-in-out duration-200
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <SiLinkedin size={48} className="text-offBlack" />
                </a>
              </Link>

              <Link href="https://www.github.com/EvanCNavarro">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  transition ease-in-out duration-200
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <SiGithub size={48} className="text-offBlack" />
                </a>
              </Link>

              <Link href="https://www.twitter.com/EvanCNavarro">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  transition ease-in-out duration-200
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <SiTwitter size={48} className="text-offBlack" />
                </a>
              </Link>

              <Link href="https://www.instagram.com/EvanCNavarro/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <SiInstagram size={48} className="text-offBlack" />
                </a>
              </Link>

              <Link href="mailto:hey@ecn.dev" passHref={true}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <SiGmail size={48} className="text-offBlack" />
                </a>
              </Link>

              <Link href="https://drive.google.com/file/d/1CpzQ8wOdTfqVPkZcMBwjtdfzGrEyyPkL/view">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                >
                  <IoDocumentText size={48} className="text-offBlack" />
                </a>
              </Link>
            </div>
          ) : (
            <div
              className="
            flex flex-wrap justify-start
            w-full
            "
            >
              <div className="flex w-full justify-evenly">
                <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <SiLinkedin size={48} className="text-offBlack" />
                  </a>
                </Link>

                <Link href="https://www.github.com/EvanCNavarro">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <SiGithub size={48} className="text-offBlack" />
                  </a>
                </Link>

                <Link href="https://www.twitter.com/EvanCNavarro">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <SiTwitter size={48} className="text-offBlack" />
                  </a>
                </Link>
              </div>

              <div className="flex w-full justify-evenly">
                <Link href="https://www.instagram.com/EvanCNavarro/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <SiInstagram size={48} className="text-offBlack" />
                  </a>
                </Link>

                <Link href="mailto:hey@ecn.dev" passHref={true}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <SiGmail size={48} className="text-offBlack" />
                  </a>
                </Link>

                <Link href="https://drive.google.com/file/d/1CpzQ8wOdTfqVPkZcMBwjtdfzGrEyyPkL/view">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group
                  px-20 py-16 rounded-lg
                  hover:bg-offWhite hover:text-offWhite hover:shadow-lg hover:-translate-y-1
                "
                  >
                    <IoDocumentText size={48} className="text-offBlack" />
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
