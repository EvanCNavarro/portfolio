import Image from "next/image";
import ecnWhiteLogo from "/public/images/logos/logo_white.svg";

export default function Footer() {
  var monthNames = [
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
    <>
      <nav className="bg-offBlack border-t border-black p-20 top-shadow-md text-white">
        <div className="flex justify-center align-middle items-center">
          {/* <Image
            src={ecnWhiteLogo}
            alt="ECN White Hero"
            width={44}
            className=""
          /> */}
          <span className="flex justify-center align-middle items-center">
            Copyright © Evan C. Navarro {currentYear}
          </span>
        </div>
      </nav>
    </>
  );
}
