import { useState, useEffect } from "react";
import Link from "next/link";

import ContainerBlock from "../../components/0_ContainerBlock";
import Navbar from "../../components/1A_Navbar";
import Banner from "../../components/1B_Banner";
import ProgressBar from "/src/components/1C_ProgressBar";
import SiteCredits from "/src/components/6A_SiteCredits";
import Footer from "/src/components/6B_Footer";

import {
  FiHash,
  FiChevronLeft,
  FiArrowLeft,
  FiChevronRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCornerRightDown,
  FiCornerDownRight,
} from "react-icons/fi";

import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiGmail,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

import Image from "next/image";

import logoFamilyChat from "/public/images/logos/familychat.png";
import logoKeymorph from "/public/images/logos/keymorph.png";
import projectBannerObjectively from "/public/images/objectively/projectBannerObjectively.png";

import familyChat1Groups from "/public/images/familychat/1_groups.png";
import familyChat2Interviews from "/public/images/familychat/2_interviews.png";

export default function Objectively() {
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
      {/* <Banner /> */}
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
              w-full space-y-0
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
                  Project 02
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
                    FINISHED
                  </span>
                </div>
              </div>

              <div
                className="
                  items-center space-y-8
                  375:space-y-16 lg:flex lg:justify-between lg:space-y-0
                "
              >
                <span className="text-44 font-black 375:text-52">
                  Objectively
                </span>

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
                      <Link href="https://objectively.info/">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          <b className="group ml-8 underline underline-offset-8 text-offBlack group-hover:text-offTeal transition ease-in-out duration-200">
                            https://objectively.info
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

              <div
                className="
                  align-top pt-12 space-y-28
                  lg:flex lg:justify-between lg:space-y-0
                "
              >
                <div className="w-full h-fit lg:w-1/2 flex align-top border-l-8 border-offPaper pl-20">
                  <span className="text-20 text-offGray font-normal 375:text-24 lg:text-28">
                    The &quot;deliberation platform&quot; helping host political
                    discussion between academics, popular figures, and political
                    pundits.
                  </span>
                </div>

                <div
                  className="
                    w-full h-fit
                    flex flex-wrap justify-center space-y-20
                    375:justify-start tablet:w-288 lg:w-1/2 lg:space-x-0 lg:space-y-16 lg:justify-end
                  "
                >
                  <span
                    className="
                      flex flex-wrap space-between
                      h-fit
                      text-16 text-offBlack font-normal
                      bg-white shadow-md px-20 py-12 rounded-full
                      375:text-20
                    "
                  >
                    🗓️ <b className="ml-4">Date:</b>
                    <div className="flex flex-wrap ml-4">May — July 2022</div>
                  </span>

                  <span
                    className="
                      flex flex-wrap align-middle items-center
                      h-fit
                      text-16 text-offBlack font-normal
                      bg-white shadow-md px-20 py-12 rounded-full
                      375:text-20
                    "
                  >
                    🧑‍🎨 <b className="ml-4">Role:</b>
                    <div className="ml-4">UX Developer</div>
                  </span>

                  <span
                    className="
                      flex flex-wrap align-middle items-center
                      h-fit
                      text-16 text-offBlack font-normal
                      bg-white shadow-md px-20 py-12 rounded-full
                      375:text-20
                    "
                  >
                    🤝 <b className="ml-4">Type:</b>
                    <div className="ml-4">Contract</div>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-96 lg:space-y-136">
              <div className="mt-40 space-y-16">
                <div
                  className="
                  w-full max-h-400 rounded-3xl
                  drop-shadow-lg
                "
                >
                  <Image
                    src={projectBannerObjectively}
                    alt="FamilyChat Case Study Banner"
                    objectFit="cover"
                    className="rounded tablet:rounded-3xl"
                    priority={true}
                    placeholder="blur"
                  />
                </div>

                <div
                  className="
                  flex
                  w-fit ml-24 mr-4
                  text-16 text-offBlack font-normal font-plexMono
                "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold">
                    Original interface design for Objectively <i>(left)</i> and
                    my proposed UX/UI improvements <i>(right)</i>.
                  </span>
                </div>
              </div>

              {/* 
              <div
                className="
                  space-y-28
                  lg:px-24
                "
              >
                <div
                  className="
                    h-60 w-full
                    bg-offOrange
                  "
                />

                <div className="border-b pb-12">
                  <div className="h-12 w-12 rounded-full bg-offRed mb-12" />
                  <div className="flex align-middle items-center text-offGray ">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold ">
                      The Challenge
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      What are popular Messaging Apps missing?{" "}
                      <b className="ml-8">💬</b>
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-20 375:text-28">
                    Existing apps like WhatsApp and iOS Messages are primary
                    options for most families, when deciding where to talk with
                    one another. However, they lack:
                    <ul className="ml-32 list-outside mt-12">
                      <li className="list-decimal text-20 375:text-28 font-bold">
                        The ability to organize conversations by
                        &quot;Topics&quot;.
                        <ul className="ml-0 list-outside">
                          <li className="list-none text-20 375:text-28 font-normal italic text-offGray">
                            → Users are left to create redundant group subsets.
                          </li>
                        </ul>
                      </li>
                      <li className="list-decimal text-20 375:text-28 font-bold">
                        Native Features for Decision Making.
                        <ul className="ml-0 list-outside">
                          <li className="list-none text-20 375:text-28 font-normal italic text-offGray">
                            → 3rd party providers fill this void, but each have
                            varying UX.
                          </li>
                        </ul>
                      </li>
                      <li className="list-decimal text-20 375:text-28 font-bold">
                        Families as the Primary Target Audience.
                        <ul className="ml-0 list-outside">
                          <li className="list-none text-20 375:text-28 font-normal italic text-offGray">
                            → Most apps that target families focus on safety for
                            kids, rather than orienting their designs around
                            better family decision-making.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>

              <div
                className="
                  space-y-28
                  lg:px-24
                "
              >
                <div className="border-b pb-12">
                  <div className="h-12 w-12 rounded-full bg-offGreen mb-12" />

                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      The Outcome
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Winner, Winner, Chicken Dinner!<b className="ml-8">🥇</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Solving these challenges led to the creation of
                    &quot;FamilyChat&quot;; a free-to-use iOS mobile app. This
                    app improves family decision-making, by pairing standard
                    messaging functionality with thoughtfully selected features
                    like:
                  </span>
                  <span className="">
                    <b className="">📌 Pinned Messages</b>,{" "}
                    <b className="375:ml-4">⚠️ Alerts</b>,{" "}
                    <b className="375:ml-4">🗳️ Polls</b>,{" "}
                    <b className="375:ml-4">🎫 Events</b>,{" "}
                    <b className="375:ml-4">📸 Images</b>.
                  </span>
                  <ul className="ml-24 mt-16 list-outside list-disc text-offGray">
                    <li className="font-normal text-20 375:text-28">
                      <u className="underline-offset-8">Qualative</u> feedback
                      from three user trials, showed a majority of positive
                      responses regarding the app;{" "}
                      <i>
                        &quot;familiar&quot;, &quot;clean&quot;, &
                        &quot;useful&quot;.
                      </i>
                    </li>
                    <li className="font-normal text-20 375:text-28">
                      <u className="underline-offset-8">Quantitative</u>{" "}
                      feedback showed that ~28% of users, reduced their overall
                      count of group chats; compared to existing messaging app
                      alternatives. These users agreed that this reduction could
                      lead to better decision-making within the groups that they
                      are currently a part of.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-16">
                <div
                  className="
                  w-full max-h-400 rounded-3xl
                  drop-shadow-lg
                "
                >
                  <Image
                    src={familyChat1Groups}
                    alt="FamilyChat Case Study Banner"
                    objectFit="cover"
                    className="rounded tablet:rounded-3xl"
                    placeholder="blur"
                  />
                </div>

                <div
                  className="
                  flex
                  w-fit ml-24 mr-4
                  text-16 text-offBlack font-normal font-plexMono
                "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold">
                    Comparison of how group chats in iOS Messages <i>(left)</i>{" "}
                    are simplified in FamilyChat <i>(right)</i>.
                  </span>
                </div>
              </div>

              <div
                className="
                  space-y-28
                  lg:px-24
                "
              >
                <hr
                  className="
                    h-4 w-100
                    bg-offTeal
                  "
                />
                <div className="border-b pb-12">
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      Competitive Analysis
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Family Focused <b className="ml-8">📲</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Researching popular messaging applications was the first
                    step for this project, because it would help to form a more
                    informed position on:
                    <ul className="ml-32 list-outside mt-12">
                      <li className="list-disc text-20 375:text-28 font-normal">
                        <b>who is targeted</b> by these applications,
                      </li>
                      <li className="list-disc text-20 375:text-28 font-normal">
                        <b>how Visual Design is used</b> to target their
                        audience,
                      </li>
                      <li className="list-disc text-20 375:text-28 font-normal">
                        and <b>what overlapping Design Patterns are shared</b>{" "}
                        between the apps.
                      </li>
                    </ul>
                  </span>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Target Audience
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Compared to the more succinct age groups targeted by
                      popular messaging applications like Snapchat for younger
                      users, FamilyChat is geared toward families as a whole. So
                      to encompass the varying generations within a typical
                      family,{" "}
                      <b>we set our target audience to 16-76 year olds</b>.
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="
                  space-y-28
                  lg:px-24
                "
              >
                <div className="border-b pb-12">
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      User Interviews
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Guided by NN/g <b className="ml-4">🗣️</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Looking at our target audience of &quot;16-76&quot;, we
                    further split these users into three smaller groups;{" "}
                    <b>younger</b> <i>(16-35)</i>, <b>middle-aged</b>{" "}
                    <i>(36-55)</i>, <b>older</b> <i>(56-76)</i>. Our goal with
                    this, was to focus on interviewing each of these groups at
                    different times during the project&apos;s lifespan.
                  </span>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Following the findings from our Competitive Analysis...
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      We interviewed{" "}
                      <i>
                        <b>four</b> middle-aged users
                      </i>{" "}
                      about popular messaging applications, using questions
                      constructed from multiple{" "}
                      <Link href="https://www.nngroup.com/articles/user-interviews/">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group
                          text-offBlack font-bold underline decoration-offBlack underline-offset-8
                          transition ease-in-out duration-200
                          hover:text-offTeal hover:decoration-offTeal
                          "
                        >
                          <u>NN/g</u>
                          <FiArrowUpRight
                            size={24}
                            className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                          />
                        </a>
                      </Link>{" "}
                      articles.
                    </span>
                  </div>
                </div>

                <div className="space-y-16 pt-28">
                  <div
                    className="
                  w-full max-h-400
                  drop-shadow-lg
                "
                  >
                    <Image
                      src={familyChat2Interviews}
                      alt="Interviews for Middle-Aged User Group"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
                      placeholder="blur"
                    />
                  </div>

                  <div
                    className="
                  flex
                  w-fit ml-24 mr-4
                  text-16 text-offBlack font-normal font-plexMono
                "
                  >
                    <FiCornerDownRight
                      size={24}
                      className="mr-8 text-offBlack"
                    />
                    <span className="w-fit font-bold">
                      Findings from the User Interviews, of the Middle-Aged User
                      Group.
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-full py-32">
            <div
              className="
                    h-fit w-full p-24 rounded drop-shadow
                    bg-offOrange
                    flex flex-wrap align-middle items-center justify-center text-center
                    mb-
                  "
            >
              ⚠️
              <span
                className="
                    text-16 text-offBlack font-bold font-plexMono mx-24
                  "
              >
                This case study is currently under construction.
              </span>
            </div>
          </div>

          <div
            className="
              flex justify-between space-x-24
              w-full
            "
          >
            <div
              className="
                w-1/2 flex justify-start
              "
            >
              <Link href="/#projects">
                <a className="w-full">
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

                    {atLeast476 ? <span>Back to Home</span> : <span>Back</span>}
                  </button>
                </a>
              </Link>
            </div>

            <div
              className="
                w-1/2
              "
            >
              <Link href="/projects/keymorph">
                <a className="w-full flex justify-end">
                  <button
                    className="
                      group
                      px-24 py-12 mt-16 w-full max-w-[13rem]
                      flex justify-center items-center space-x-4
                      bg-offBlack text-white text-16 font-bold font-plexMono
                      rounded-lg outline-none
                      hover:bg-offBlack/90 hover:shadow-lg
                    "
                  >
                    {atLeast476 ? <span>View Next</span> : <span>Next</span>}

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

      <Footer />
    </ContainerBlock>
  );
}
