import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { MdOpenInNew } from "react-icons/md";
import { Tooltip, Button, Grid } from "@nextui-org/react";
import userData from "../constants/data";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => {
    setActive(!active);
  };

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  // const chooseRandomQuote = () => {
  //   setRandomNumber(getRandomInt(20));
  //   console.log(`${randomNumber}`)
  //   return randomNumber;
  //   // return userData.quotes[getRandomInt(20)];
  // };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-offWhite p-20 drop-shadow-md">
        <Grid className="inline-flex items-center ">
          <Tooltip
            color="primary"
            // content={`${chooseRandomQuote}`}
            content=""
            placement="bottomStart"
          >
            <Link href="/">
              <a>
                <img src="/logo_black.svg" alt="ECN Logo" className="h-36" />
              </a>
            </Link>
          </Tooltip>
        </Grid>

        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        {/* <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Contact
              </a>
            </Link>
          </div>
        </div> */}

        <Link href="https://drive.google.com/file/d/1CpzQ8wOdTfqVPkZcMBwjtdfzGrEyyPkL/view?usp=sharing">
          <a target="_blank" rel="noopener noreferrer" className="ml-auto">
            <button className="inline-flex text-white font-bold p-2 bg-offBlack hover:bg-offBlack/75 rounded outline-none">
              <div className="inline-flex items-center space-x-3 ml-12 mr-12">
                <div className="text-base">View Resume</div>
                <MdOpenInNew className="ml-2" />
              </div>
            </button>
          </a>
        </Link>
      </nav>
    </>
  );
}
