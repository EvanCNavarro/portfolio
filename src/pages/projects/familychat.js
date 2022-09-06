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

import Image from "next/image";

import logoFamilyChat from "/public/images/logos/familychat.png";
import familyChatBanner1 from "/public/images/familychat/banner1.png";
import familyChatBanner2 from "/public/images/familychat/banner2.png";
import familyChatBanner3 from "/public/images/familychat/banner3.png";
import familyChat1Groups from "/public/images/familychat/1_groups.png";
import familyChat2Interviews from "/public/images/familychat/2_interviews.png";
import familyChat3ASketches from "/public/images/familychat/3A_sketches.png";
import familyChat3BLowFidelity from "/public/images/familychat/3B_lowFidelity.png";
import familyChat4Inspiration from "/public/images/familychat/4_inspiration.png";
import familyChat5FinalDesign from "/public/images/familychat/5_finalDesign.png";
import familyChat6STEMDay from "/public/images/familychat/6_STEMDay.png";
import familyChat7Avatars from "/public/images/familychat/7_avatars.png";

export default function FamilyChat() {
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
                  Project 01
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
                  FamilyChat
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
                      <Link href="https://familychat.app/">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          <b className="group ml-8 underline underline-offset-8 text-offBlack group-hover:text-offTeal transition ease-in-out duration-200">
                            https://familychat.app
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
                    Mobile chat application created for families; pairing five
                    interactive features, alongside standard messaging
                    functionality.
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
                      flex flex-wrap justify-center align-middle items-center
                      h-fit
                      text-16 text-offBlack font-normal
                      bg-white shadow-md px-20 py-12 rounded-full
                      375:text-20
                    "
                  >
                    🗓️ <b className="ml-8">Date:</b>
                    <div className="ml-8">May 2021 — 2022</div>
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
                    🧑‍🎨 <b className="ml-8">Role:</b>
                    <div className="ml-8">PM, Lead Designer</div>
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
                    🏫 <b className="ml-8">Type:</b>
                    <div className="ml-8">Senior Design</div>
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
                    src={familyChatBanner3}
                    alt="FamilyChat Case Study Banner"
                    objectFit="cover"
                    className="rounded tablet:rounded-3xl"
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
                    &quot;FamilyChat&quot; being awarded{"  "}
                    <b className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-offTeal/10 relative inline-block">
                      &quot;Best in Show&quot;
                    </b>
                    , during UCF&apos;s Spring 2022 Senior Design Finalists
                    Event.
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
                    each other. However, they lack:
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
                    &quot;FamilyChat&quot;; a free-to-use iOS mobile
                    application. This app improves family decision-making, by
                    pairing standard messaging functionality with thoughtfully
                    selected features like:
                  </span>
                  <span className="">
                    <b className="">📌 Pinned Messages</b>,{" "}
                    <b className="375:ml-8">⚠️ Alerts</b>,{" "}
                    <b className="375:ml-8">🗳️ Polls</b>,{" "}
                    <b className="375:ml-8">🎫 Events</b>,{" "}
                    <b className="375:ml-8">📸 Images</b>.
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
                    would be simplified within FamilyChat <i>(right)</i>.
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
                      Focusing on Families <b className="ml-8">📲</b>
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
                      to encompass the varying generations within a
                      stereotypical family,{" "}
                      <b>we set our target audience to 16-76 year old users</b>.
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
                      Guided by NN/g <b className="ml-8">🗣️</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Looking at our target audience of "16-76", we further split
                    these users into three smaller groups; younger{" "}
                    <i>(16-35)</i>, middle-aged <i>(36-55)</i>, older
                    <i>(56-76)</i>. Our goal with this, was to focus on
                    interviewing each of these groups at different times during
                    the project's lifespan.
                  </span>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Following the findings from our Competitive Analysis...
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      We interviewed a set of{" "}
                      <i>
                        <b>four</b> middle-aged users
                      </i>{" "}
                      about existing messaging applications, using questions
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
              </div>
              <div
                className="
                  lg:px-24
                "
              >
                <div className="space-y-28">
                  <div className="border-b pb-12">
                    <div className="flex align-middle items-center text-offGray">
                      <FiHash size={16} className="mr-8" />
                      <span className="text-16 font-plexMono font-bold">
                        Analysis of Research
                      </span>
                    </div>
                    <div>
                      <span className="text-32 font-black 375:text-40">
                        Insights Found <b className="ml-8">🔍</b>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      The entire FamilyChat team sat down and discussed our
                      findings from our Market Research and User Interviews.
                      There were many overlapping constructs and ideas deduced
                      from our findings but we distilled our findings into 3
                      major insights.
                    </span>
                  </div>
                </div>

                <div
                  className="
                    flex flex-wrap justify-center space-y-24
                    375:space-y-32 sm:justify-evenly md:space-y-48 xl:justify-between xl:mt-36 xl:space-y-0
                  "
                >
                  <div
                    className="
                      min-w-[280px] w-full h-fit mt-24
                      bg-offWhite rounded-3xl p-24 space-y-20
                      font-plexSans text-16 text-offBlack
                      drop-shadow-lg
                      375:mt-32 md:w-[280px] md:mt-48 lg:w-[328px] xl:mt-0 xl:w-[280px]
                    "
                  >
                    <div
                      className="
                        flex flex-wrap justify-between items-top align-top
                        h-fit w-full
                        border-b border-offPaper pb-12
                        text-16 font-black font-plexMono text-offBlack
                      "
                    >
                      <div className="flex">
                        <span className="">Insight #1</span>
                      </div>
                      <div className="">
                        <span className="drop-shadow-xl">💡</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap space-y-8 h-fit ">
                      <span
                        className="font-black text-20 h-fit 375:text-24
                        "
                      >
                        Topical Organization
                      </span>

                      <span
                        className="text-offGray h-fit 375:text-20
                        "
                      >
                        Users enjoy the ease of quick chattting with their
                        family, but would enjoy the ability for deeper
                        organization of groups.
                      </span>
                    </div>
                  </div>

                  <div
                    className="
                      min-w-[280px] w-full h-fit
                      bg-offWhite rounded-3xl p-24 space-y-20
                      font-plexSans text-16 text-offBlack
                      drop-shadow-lg
                      md:w-[280px] lg:w-[328px] xl:w-[280px]
                    "
                  >
                    <div
                      className="
                        flex flex-wrap justify-between items-top align-top
                        h-fit w-full
                        border-b border-offPaper pb-12
                        text-16 font-black font-plexMono text-offBlack
                      "
                    >
                      <div className="flex">
                        <span className="">Insight #2</span>
                      </div>
                      <div className="">
                        <span className="drop-shadow-xl">💡</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap space-y-8 h-fit ">
                      <span className="font-black text-20 h-fit 375:text-24">
                        Native Features
                      </span>

                      <span
                        className="text-offGray h-fit 375:text-20
                        "
                      >
                        Users want a variety in native features to help with
                        decision making, event planning, and saving important
                        notes.
                      </span>
                    </div>
                  </div>

                  <div
                    className="
                      min-w-[280px] w-full h-fit
                      bg-offWhite rounded-3xl p-24 space-y-20
                      font-plexSans text-16 text-offBlack
                      drop-shadow-lg
                      md:w-[280px] lg:w-[328px] xl:w-[280px]
                    "
                  >
                    <div
                      className="
                        flex flex-wrap justify-between items-top align-top
                        h-fit w-full
                        border-b border-offPaper pb-12
                        text-16 font-black font-plexMono text-offBlack
                        
                      "
                    >
                      <div className="flex">
                        <span className="">Insight #3</span>
                      </div>
                      <div className="">
                        <span className="drop-shadow-xl">💡</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap space-y-8 h-fit ">
                      <span
                        className="font-black text-20 h-fit 375:text-24
                        "
                      >
                        Target Audience
                      </span>

                      <span
                        className="text-offGray h-fit text-16 375:text-20
                        "
                      >
                        Users enjoy the familiarity of existing messaging apps,
                        but feel that they themselves aren&apos;t the main
                        target audience.
                      </span>
                    </div>
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
                      Wireframing
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Early Designs <b className="ml-8">✍️</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Starting with rough Procreate sketches on the iPad, we
                      created Low-Fidelity Prototypes of the application using
                      components shared amongst a majority of the popular
                      messaging apps. Another major design decision within the
                      Authentication user journey, was the{" "}
                      <b>removal of account passwords</b>; to help older users
                      who have trouble remembering their login credentials.
                    </span>
                  </div>
                </div>

                <div className="space-y-16 py-40">
                  <div
                    className="
                  w-full h-fit
                  drop-shadow-lg
                "
                  >
                    <Image
                      src={familyChat3ASketches}
                      alt="iPad Sketches of App UI"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                      First sketches of the FamilyChat mobile app, in iPad
                      Procreate.
                    </span>
                  </div>
                </div>

                <div className="space-y-16">
                  <div
                    className="
                  w-full h-fit
                  drop-shadow-lg
                "
                  >
                    <Image
                      src={familyChat3BLowFidelity}
                      alt="Low Fidelity Figma Wireframes"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                      Low-Fidelity Figma Prototypes of the FamilyChat mobile
                      app.
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
                      Visual Design
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Bringing things to life <b className="ml-8">🎨</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Inspiration
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Existing apps that were used as primary examples during
                      the design process:
                      <ul className="ml-32 list-outside mt-12">
                        <li className="list-disc text-20 375:text-28 font-normal space-x-8">
                          <Link href="https://uxdesign.cc/clubhouse-a-new-social-media-experience-to-design-787b13856907">
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
                              <u>Clubhouse</u>
                              <FiArrowUpRight
                                size={24}
                                className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                              />
                            </a>
                          </Link>
                          <i className="text-offGray">for color theme.</i>
                        </li>
                        <li className="list-disc text-20 375:text-28 font-normal space-x-8">
                          <Link href="https://slack.com/accessibility">
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
                              <u>Slack</u>
                              <FiArrowUpRight
                                size={24}
                                className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                              />
                            </a>
                          </Link>
                          <i className="text-offGray">
                            for styling of messages.
                          </i>
                        </li>
                        <li className="list-disc text-20 375:text-28 font-normal space-x-8">
                          <Link href="https://medium.com/@ukairi/design-analysis-discords-rebrand-past-gaming-995436d3283f">
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
                              <u>Discord</u>
                              <FiArrowUpRight
                                size={24}
                                className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                              />
                            </a>
                          </Link>
                          <i className="text-offGray">for organizing topics.</i>
                        </li>
                        <li className="list-disc text-20 375:text-28 font-normal space-x-8">
                          <Link href="https://raw.studio/blog/how-headspace-designs-for-mindfulness/">
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
                              <u>Headspace</u>
                              <FiArrowUpRight
                                size={24}
                                className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                              />
                            </a>
                          </Link>
                          <i className="text-offGray">for playfulness.</i>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Mood Board → Color
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Curating a mood board from family-friendly images, mobile
                      apps, color swatches, and soft pastels allowed for a clear
                      direction of what the application's color pallete should
                      be.
                    </span>
                  </div>
                </div>

                <div className="space-y-16 pt-28">
                  <div
                    className="
                      w-full h-fit
                      drop-shadow-lg
                    "
                  >
                    <Image
                      src={familyChat4Inspiration}
                      alt="Color Influence for App's Aesthetic"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                      Using a mood board <i>(left)</i> to create color swatches{" "}
                      <i>(middle)</i> for final brand colors <i>(right)</i>.
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
                      High Fidelity Prototyping
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Finalizing the Design <b className="ml-8">⛳</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      With plans to showcase the application to the
                      &quot;younger&quot; user group next, it was important to
                      have the app's design and branding be on point.
                      Considering that our application was poised to be a
                      competitor to popular communication apps like iOS
                      Messages, Discord, and Snapchat; it was important to have
                      a well polished presentation for our younger users.
                    </span>
                  </div>
                </div>

                <div className="space-y-16">
                  <div
                    className="
                      w-full h-fit rounded-3xl
                      drop-shadow-lg
                    "
                  >
                    <Image
                      src={familyChat5FinalDesign}
                      alt="High-Fidelity Prototype Designs for FamilyChat"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                    <span className="w-fit font-bold inline-block">
                      Figma screens from the Final Prototype (High-Fidelity) for
                      FamilyChat.
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
                      STEM Day Event
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Do the kids approve? <b className="ml-8">🧒</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      The university <i>(UCF)</i> held an all day event{" "}
                      <i>(STEM Day)</i> for middle-school and high-school
                      students, to come an view STEM related Senior Design
                      projects. This allowed my group to test our application
                      with younger users, get input, and practice our
                      &quot;sales pitch&quot;.
                      <ul className="ml-24 mt-16 list-outside list-disc text-offGray">
                        <li className="font-normal text-20 375:text-28">
                          <u className="underline-offset-8">Qualative</u>{" "}
                          feedback from these younger users, showed genuine
                          understanding of the application's purpose and
                          messaging functionality.
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className="space-y-16">
                  <div
                    className="
                      w-full h-fit rounded-3xl
                      drop-shadow-lg
                    "
                  >
                    <Image
                      src={familyChat6STEMDay}
                      alt="High-Fidelity Prototype Designs for FamilyChat"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                    <span className="w-fit font-bold inline-block">
                      The FamilyChat demonstration/testing booth, during the
                      STEM Day Event.
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
                      Project Realignment
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      The Final Polishing <b className="ml-8">👨‍👩‍👧‍👦</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Following the feedback from the <i>younger user group</i>,
                    certain changes were made to the application:
                    <ul className="ml-32 list-outside mt-12">
                      <li className="list-disc text-20 375:text-28 font-normal">
                        create <b>friendlier</b> avatar images,
                      </li>
                      <li className="list-disc text-20 375:text-28 font-normal">
                        have <b>rounded avatar icons</b>, similar to popular
                        apps,
                      </li>
                      <li className="list-disc text-20 375:text-28 font-normal">
                        and further <b>simplify the authentication process</b>.
                      </li>
                    </ul>
                  </span>
                </div>

                <div className="space-y-16">
                  <div
                    className="
                      w-full h-fit rounded-3xl
                      drop-shadow-lg
                    "
                  >
                    <Image
                      src={familyChat7Avatars}
                      alt="High-Fidelity Prototype Designs for FamilyChat"
                      objectFit="cover"
                      className="rounded tablet:rounded-3xl"
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
                    <span className="w-fit font-bold inline-block">
                      Matching custom icons for Topics <i>(left)</i> and for
                      Profile Avatars <i>(right)</i>.
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
                      SD Showcase Event
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      &quot;Last but not least...&quot;{" "}
                      <b className="ml-8">👏</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Semi-Finalist Projects
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Near the end of the semester, my SD group had recieved an
                      invitation to join UCF&apos;s Senior Design Showcase
                      Event. This was truly an honor, because only{" "}
                      <b>6 out of ~52 teams</b>{" "}
                      <i>(from each STEM discipline)</i> are offered to
                      participate. For additional context, there were a total of
                      188 involved teams for the entire graduating class of
                      Spring &apos;22.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    We made History!
                  </span>

                  <div className="inline-block font-normal text-20 375:text-28">
                    <span className="">
                      FamilyChat was the <b>first CS team</b> <i>&</i>{" "}
                      <b>the first Student Sponsored project</b> to ever win
                      &quot;Best In Show&quot; since this event&apos;s
                      inception. <b className="mx-8">👀</b>
                    </span>
                    <FiCornerRightDown
                      size={24}
                      className="inline-block ml-8 text-offGray"
                    />
                  </div>
                </div>

                <div
                  className="
                    flex flex-wrap justify-center space-y-16
                    w-full
                    320:h-160 375:h-192 390:h-200 414:h-216 428:h-224 476:h-256 md:h-344 lg:h-400 xl:h-536
                  "
                >
                  <iframe
                    src="https://www.youtube.com/embed/jP9NH397LyQ?rel=0"
                    title="Senior Design Showcase Award Ceremony - Best in Show - FamilyChat"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="w-full h-full rounded-3xl"
                  />

                  <div
                    className="
                      flex justify-start
                      w-full ml-24 mr-4
                      text-16 text-offBlack font-normal font-plexMono
                    "
                  >
                    <FiCornerDownRight
                      size={24}
                      className="mr-8 text-offBlack"
                    />
                    <span className="w-fit font-bold inline-block">
                      Video snippet of the event's award ceremony, announcing
                      FamilyChat as Best in Show.
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
                  <div className="h-12 w-12 rounded-full bg-offRed mb-12" />
                  <div className="flex align-middle items-center text-offGray ">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold ">
                      Final Thoughts
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Any last words? <b className="ml-8">💬</b>
                    </span>
                  </div>
                </div>

                <div>
                  {/* <span className="text-20 375:text-28"> */}
                  <span className="text-16 italic text-offGray">
                    (WHAT I LEARNED, WHAT I WOULD DO DIFFERENTLY, AND WHAT I
                    WOULD DO THE SAME) This project was the highlight of my
                    academic career. This was the most involved I've been with
                    the design process for any of my CS projects. This was a
                    continuation of my Project Managment for projects, but was
                    the hardest test of those skills. I learned a lot about
                    myself. I learned extensively about React Native, Firebase,
                    Mobile Development, Documentation, UX Research, applying
                    Design Principles, Figma, creating a Design System. I
                    learned how to work with a team of 5 people, and how to
                    manage a team of 5 people. Since creating the FamilyChat
                    application, Discord and WhatsApp have implemented changes
                    to their app addressing some of the problems that we
                    identitifed. Discord added Events and Home space for
                    servers.
                    https://support.discord.com/hc/en-us/articles/4409494125719-Scheduled-Events
                    https://support.discord.com/hc/en-us/articles/6156116949911-Server-Home-Beta
                    WhatsApp added communities.
                    https://beebom.com/whatsapp-communities-better-organize-group-chats/
                    Further development will continue on the app in November
                    2022 with myself and JJ the student sponsor acting as the
                    sole contributors. GIFs and Images of the final app.
                  </span>
                </div>
              </div>

              {/* Back + Next Buttons */}
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

                        {atLeast476 ? (
                          <span>Back to Home</span>
                        ) : (
                          <span>Back</span>
                        )}
                      </button>
                    </a>
                  </Link>
                </div>

                <div
                  className="
                    w-1/2
                  "
                >
                  <Link href="/projects/objectively">
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
                        {atLeast476 ? (
                          <span>View Next</span>
                        ) : (
                          <span>Next</span>
                        )}

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

      <Footer />
    </ContainerBlock>
  );
}
