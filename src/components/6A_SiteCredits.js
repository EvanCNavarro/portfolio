import { useState, useEffect } from "react";
import { MdInfoOutline } from "react-icons/md";
import { Tooltip, Grid } from "@nextui-org/react";
// import { WorkTooltip } from "../components/WorkTooltip";

export default function SiteInformation() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isDesktop = screenWidth > 799;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = monthNames[currentDate.getMonth()];

  console.log(
    `\n"Hey there! 👋🤓💻\nThanks for visiting my website.\nI hope you enjoy it!"\n\n- Evan C. Navarro (${currentMonth} 2022)\n\n`
  );

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
            content={`This site is: built with Next.js/React, styled with TailwindCSS, uses the "IBM Plex" font, and is deployed via Vercel.`}
            enterDelay={150}
            placement={isDesktop ? "left" : "top"}
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
                <span className="flex">Site Information</span>
              </div>
              <span className="flex font-normal">—</span>
              <span className="flex">Made with ❤️</span>
            </div>
          </Tooltip>
        </Grid>
      </div>
    </div>
  );
}
