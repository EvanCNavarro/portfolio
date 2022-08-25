import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logoVercel from "/public/images/logos/vercel.svg";

export default function Footer() {
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
    <nav
      className="
        flex flex-wrap justify-center items-center align-items
        bg-offBlack top-shadow-md
        text-white
      "
    >
      <div
        className="
          flex flex-wrap justify-center items-center align-items
          w-full max-w-[1000px] py-16
          lg:justify-between
        "
      >
        <div className="flex flex-wrap justify-center text-center px-20 my-16 space-x-8 xl:px-0">
          <span className="">Copyright © Evan C. Navarro {currentYear}.</span>
          <span className="">All rights reserved.</span>
        </div>

        <Link href="https://vercel.com/dashboard?utm_source=evancnavarro&utm_campaign=oss">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-middle px-24 xl:px-0"
          >
            <Image
              src={logoVercel}
              alt="Vercel Logo"
              quality={100}
              objectFit="cover"
              className=""
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
