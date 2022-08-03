import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { MdOpenInNew } from "react-icons/md";
import { Tooltip, Button, Grid } from "@nextui-org/react";
import userData from "../constants/data";

export default function Footer() {
  return (
    <>
      <nav className=" mt-auto flex items-center flex-wrap bg-offBlack border-t border-black p-16 top-shadow-md space-x-3 text-white">
        <img src="/logo_white.svg" alt="ECN Logo" className="h-16" />
        <div className="">© 2022 Evan C. Navarro</div>
      </nav>
    </>
  );
}
