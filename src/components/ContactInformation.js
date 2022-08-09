import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubAlt, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import yatLogo from "/public/logos/yat.svg";

export default function ContactInformation() {
  return (
    <>
      <hr id="contact" class="w-88 h-4 bg-teal mt-40 mb-32" />

      <div className="mb-24">
        <Link href="#contact">
          <a className="group mb-24">
            <h1 className=" text-32 mt-0 mb-2 space-x-12">
              <strong className=" text-offGray group-hover:text-offGray/75">
                #
              </strong>
              <strong className="text-offBlack group-hover:text-offBlack/75">
                Contact
              </strong>
            </h1>
          </a>
        </Link>

        <div className="mt-24">
          <h2 className="text-24">
            <span className="font-medium text-offGray mr-4">Email me → </span>
            <Link href="mailto:hey@ecn.dev" passHref={true}>
              <a className="underline underline-offset-4 hover:underline hover:text-offBlack/75">
                <strong className="text-offBlack mr-0 hover:text-offBlack/75">
                  hey@ecn.dev
                </strong>
              </a>
            </Link>
          </h2>
        </div>

        <div className="mt-16">
          <h2 className="text-24">
            <span className="font-medium text-offGray mr-4">Social → </span>
            <span className="font-bold text-offBlack mr-0 ">@EvanCNavarro</span>
          </h2>
        </div>

        <div className="mt-8 text-black justify-center">
          <div className="text-black flex">
            <div className="hover:opacity-75 hover:bg-offWhite mr-8 h-60 w-60 rounded flex items-center justify-center">
              <Link href="https://www.linkedin.com/in/EvanCNavarro/">
                <a target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin className=" hover:opacity-75" size={48} />
                </a>
              </Link>
            </div>
            <div className="hover:opacity-75 hover:bg-offWhite mr-8 h-60 w-60 rounded flex items-center justify-center">
              <Link href="https://www.github.com/EvanCNavarro">
                <a target="_blank" rel="noopener noreferrer">
                  <FaGithubAlt className="hover:opacity-75" size={48} />
                </a>
              </Link>
            </div>
            <div className="hover:opacity-75 hover:bg-offWhite mr-8 h-60 w-60 rounded flex items-center justify-center">
              <Link href="https://www.twitter.com/EvanCNavarro">
                <a target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:opacity-75" size={48} />
                </a>
              </Link>
            </div>
            <div className="hover:opacity-75 hover:bg-offWhite mr-8 h-60 w-60 rounded flex items-center justify-center align-middle">
              <Link href="https://y.at/👋🤓💻">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="pt-8">
                    <Image
                      src={yatLogo}
                      alt="Y.at Black Hero"
                      width={48}
                      height={48}
                      className=""
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
