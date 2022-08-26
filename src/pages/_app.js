import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import useSmoothScroll from "../hooks/useScrollSmooth";

export default function App({ Component, pageProps }) {
  useSmoothScroll();

  return (
    <NextUIProvider>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}
