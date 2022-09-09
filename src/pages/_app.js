import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import useSmoothScroll from "../hooks/useScrollSmooth";

export default function App({ Component, pageProps }) {
  useSmoothScroll();

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

  console.info(
    `\n"Hey there! 👋🤓💻\nThanks for visiting my website.\nI hope you enjoy it!"\n\n- Evan C. Navarro (${currentMonth} ${currentYear})\n\n`
  );

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
