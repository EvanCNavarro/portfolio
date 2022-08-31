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
                    Existing apps like WhatsApp, and iOS Messages are first
                    options for most families, but these apps lack:
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
                        The Family Unit as Target Audience.
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
                      Winner, winner, chicken dinner! <b className="ml-8">🥇</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Solving these challenges lead to the creation of our
                    free-to-use iOS mobile application; &quot;FamilyChat&quot;.
                    This app helps families with their decision-making, by
                    pairing standard messaging functionality with a range of
                    useful features:
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
                      from users after three trials, showed a majority of
                      positive opinions about the app.
                    </li>
                    <li className="font-normal text-20 375:text-28">
                      <u className="underline-offset-8">Quantitative</u>{" "}
                      feedback showed that ~28% of users, reduced their overall
                      count of group chats; compared to existing messaging app
                      alternatives. These users agreed that this reduction could
                      lead to better decision-making within groups they are a
                      part of.
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <span className="text-20 375:text-28">
                    All Front-End components used for the app were designed from
                    scratch within Figma, and developed using React Native.
                    Authentication and Database Storage, were handled through
                    Google's Firebase and Cloud Firestore, respectively.
                  </span>
                </div> */}
              </div>

              <div className="mt-40 space-y-16">
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
                    Comparison of how group chats are managed in iOS Messages{" "}
                    <i>(left)</i> and FamilyChat <i>(right)</i>.
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
                      Market Research
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      For Families? <b className="ml-8">📲</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    First thing to do for this project was to analyze what
                    currently exists for communication apps for groups and more
                    specifically families. Of those existing apps we created a
                    graph of what thigns they had that overlapped, what
                    featrues, their target audience, downsides when compared to
                    the target audience of families, their intended goal and how
                    that compared with what we were trying to accomplish with
                    creating FamilyChat AKA better. decision making and less
                    clutter for conversations.
                  </span>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Target Audience
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Considering that our application is geared towards
                      families we had to be very particular with who we were
                      targeting when creating our app. Families are
                      traditionally diverse in age, experience, and design
                      preference. To combat the wide range of options, we
                      focused on users at the ages of 16-76.
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
                      With a lot help from NN/g & JJ <b className="ml-8">🗣️</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    My teammate / design cohort, JJ and I constructed proper
                    user interview questions, following guidance from numerous
                    NN/g articles and other external resources. Our primary goal
                    was to ask these users specific questions about issues
                    they&apos;ve experience while using the apps that we
                    highlighted during our Market Research.
                  </span>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold">
                    Screenshot from Notion, highlighting the interviews
                    feedback, etc.
                  </span>
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
                        375:text-20
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
                        Users wanted to be able to organize conversations by
                        topics, rather than having to create an entirely new
                        group chat for a specific discussion or event.
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
                        375:text-20
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
                      <span
                        className="font-black text-20 h-fit 375:text-24
                        "
                      >
                        Native Features
                      </span>

                      <span
                        className="text-offGray h-fit 375:text-20
                        "
                      >
                        Users wanted to be able to organize conversations by
                        topics, rather than having to create an entirely new
                        group chat for a specific discussion or event.
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
                        375:text-20
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
                        className="text-offGray h-fit 375:text-20
                        "
                      >
                        Users wanted to be able to organize conversations by
                        topics, rather than having to create an entirely new
                        group chat for a specific discussion or event.
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
                      User Personas
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Putting a Name to the Face <b className="ml-8">👨‍👩‍👧‍👦</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    My teammate / design cohort, JJ and I constructed proper
                    user interview questions, following guidance from numerous
                    NN/g articles and other external resources. Our primary goal
                    was to ask these users specific questions about issues
                    they&apos;ve experience while using the apps that we
                    highlighted during our Market Research.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      System Design
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Defining the &quot;Specs & Reqs&quot;{" "}
                      <b className="ml-8">📝</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Once my team and I had a fair understanding of what problems
                    to address when creating the FamilyChat application, we then
                    pivoted to defining the more technical details behind the
                    project.
                  </span>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    As a requirement of the school project we were required to
                    create a 150 page document called the &quot;Final Design
                    Document&quot;. Within this document the team had an equal
                    contribution detailing what tools and technologies we would
                    use to create the application, a brief explanation behind
                    our decisions, research done, plans for future development,
                    and any other relevant information pertaining to the
                    completion of the FamilyChat application.
                  </span>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <span className="text-20 font-black 375:text-28">
                    iPad Sketches
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Considering that our application is geared towards
                      families we had to be very particular with who we were
                      targeting when creating our app. Families are
                      traditionally diverse in age, experience, and design
                      preference. To combat the wide range of options, we
                      focused on users at the ages of 16-76.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Low-Fidelity Prototypes
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Considering that our application is geared towards
                      families we had to be very particular with who we were
                      targeting when creating our app. Families are
                      traditionally diverse in age, experience, and design
                      preference. To combat the wide range of options, we
                      focused on users at the ages of 16-76.
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      Internal Testing
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      But does it all work? <b className="ml-8">🔬</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    User Testing #1
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Intermediary testing of the low-fidelity prototypes with
                      team, and select older family members.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Feedback #1
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Feedback acrued during user testing, and changes made:
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
                      Bringing it to life <b className="ml-8">🎨</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Inspiration
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Intermediary testing of the low-fidelity prototypes with
                      team, and select older family members.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Mood Board → Color
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Feedback acrued during user testing, and changes made:
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                      Having a testable product in hand in preparation for
                      showcasing to kids/younger crowd because they&apos;re more
                      generally influenced by polish. A bunch of iterations
                      through Figma, multiple design meetings, ux principles,
                      color theory, component consistency, design system.
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      STEM Day Event
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      But do the kids approve? <b className="ml-8">🧒</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    User Testing #2
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Letting middle schoolers and early highschoolers try out
                      the application and give feedback. Test our sales pitch.
                      How easy is the idea them to adopt? I personally like
                      getting feedback from kids because they&apos;re blunt.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    Feedback #2
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      Positive reviews from the kids, and overall good
                      experience from adults accompying them.
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      Project Realignment
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Double Checking our work <b className="ml-8">👨‍👩‍👧‍👦</b>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap font-normal text-20 375:text-28">
                  <span className="">
                    Make changes to the project plan based on feedback gathered
                    from STEM event, what&apos;s left, what we want to do, how
                    that matches with the user personas, new design ideas,
                    stretch goals, and project specs and reqs.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      SD Finalists Event
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      Receving the &quot;Best in Show&quot; Award{" "}
                      <b className="ml-8">🧒</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    The Invitiation
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      We recieved an invitation to join the ucf&apos;s senior
                      design semi-finalists event (spring 2022). only 6 out of
                      ~52 possible teams from each discipline are selected to
                      join. there was a total of 188 teams out of the entire
                      graduating class that had senior design projects during
                      the spring 2022 semester.
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    User Testing + Feedback #3
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">Testing during the actual event.</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-20 font-black 375:text-28">
                    &quot;Last but not least...&quot;
                  </span>

                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">We got the award.</span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      Discord Updates
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      In the right direction <b className="ml-8">⛳</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      During and after the development of our project, other
                      applications were implementing changes to their app as
                      expected which addressed some of the problems we
                      highlighted in our insights/project criteria. Discord
                      added events and added a home button for servers which
                      showcases similar functionality for missed messages for
                      users who want a quick glance at what they&apos;ve missed.
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                  <div className="flex align-middle items-center text-offGray">
                    <FiHash size={16} className="mr-8" />
                    <span className="text-16 font-plexMono font-bold">
                      Future Development
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      What&apos;s next for FamilyChat?{" "}
                      <b className="ml-8">⛳</b>
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-wrap font-normal text-20 375:text-28">
                    <span className="">
                      We plan to work on FamilyChat in late September of 2022.
                      Link to GitHub Issues.
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-80 space-y-16">
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
                    w-fit ml-24 mr-4
                    text-16 text-offBlack font-normal font-plexMono
                  "
                >
                  <FiCornerDownRight size={24} className="mr-8 text-offBlack" />
                  <span className="w-fit font-bold inline-block">
                    <b className="drop-shadow">👀</b>{" "}
                    <Link href="https://www.linkedin.com/in/evancnavarro?trk=people-guest_people_search-card">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group
                      text-offBlack font-bold underline decoration-offBlack underline-offset-8
                      transition ease-in-out duration-200
                      hover:text-offTeal hover:decoration-offTeal"
                      >
                        <u>Click this link</u>
                        <FiArrowUpRight
                          size={24}
                          className="text-offBlack inline-block group-hover:text-offTeal transition ease-in-out duration-200"
                        />
                      </a>
                    </Link>{" "}
                    to view FamilyChat&apos;s Final Design Document,
                    Presentation Slides, Videos, etc.
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
                      Lessons Learned
                    </span>
                  </div>
                  <div>
                    <span className="text-32 font-black 375:text-40">
                      My most important takeaways <b className="ml-8">💬</b>
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-20 375:text-28">
                    Existing apps like WhatsApp, and iOS Messages are first
                    options for most families, but these apps lack:
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
                        Family as Target Audience.
                        <ul className="ml-0 list-outside">
                          <li className="list-none text-20 375:text-28 font-normal italic text-offGray">
                            → Most apps that target families focus on safety for
                            kids, rather than orienting their designs around
                            better family decision making.
                          </li>
                        </ul>
                      </li>
                    </ul>
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
