import Image from "next/image";
import ecnWhiteLogo from "/public/logos/logo_white.svg";

export default function Footer() {
  return (
    <>
      <nav className="bg-offBlack border-t border-black p-20 top-shadow-md text-white">
        <div className="flex items-center align-middle space-x-5">
          <Image
            src={ecnWhiteLogo}
            alt="ECN White Hero"
            width={44}
            className=""
          />
          <div className="">© 2022 Evan C. Navarro</div>
        </div>
      </nav>
    </>
  );
}
