import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";
import ecnBlackLogo from "/public/images/logos/logo_black.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center space-between flex-wrap bg-offWhite pt-20 pb-20 drop-shadow-md">
        <div className="flex flex-grow ml-[6.25%]">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src={ecnBlackLogo}
                alt="ECN Black Hero"
                height={36}
                className=""
              />
            </a>
          </Link>
        </div>

        <div className="flex mr-[6.25%]">
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
        </div>
      </nav>
    </>
  );
}
