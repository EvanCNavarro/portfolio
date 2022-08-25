import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { MdInfo } from "react-icons/md";

export default function SiteCredits() {
  return (
    <>
      <hr className="w-88 h-4 bg-teal mt-40 mb-32" />

      <div className="mb-24 italic rounded-lg bg-offWhite p-16">
        <div className="flex items-center space-x-2 mb-8">
          <MdInfo className="text-offGray " size={16} />
          <h3 className="text-16 font-bold text-offGray">
            <medium className="">This porfolio site was:</medium>
          </h3>
        </div>
        <ul className="text-offGray pl-24">
          <li className="m-0">
            <div className="">
              <h2 className="text-20">
                <span className="">designed</span>
                <span className="pl-4">in</span>
                <Link href="https://www.figma.com/proto/1EEwUScFrapVBDjwsK3J3N/Portfolio?node-id=87%3A326&starting-point-node-id=87%3A326">
                  <a target="_blank" rel="noopener noreferrer">
                    <span className="pl-4 font-medium underline underline-offset-4 text-offBlack hover:underline hover:text-offBlack/75">
                      Figma
                    </span>
                  </a>
                </Link>
                <span className="">,</span>
              </h2>
            </div>
          </li>
          <li className="m-0">
            <div className="">
              <h2 className="text-20">
                <span className="">developed</span>
                <span className="pl-4">using</span>
                <Link href="https://nextjs.org/">
                  <a target="_blank" rel="noopener noreferrer">
                    <span className="pl-4 font-medium underline underline-offset-4 text-offBlack hover:underline hover:text-offBlack/75">
                      NextJS
                    </span>
                  </a>
                </Link>
                <span className="">,</span>
              </h2>
            </div>
          </li>
          <li className="m-0">
            <div className="">
              <h2 className="text-20">
                <span className="">styled</span>
                <span className="pl-4">with</span>
                <Link href="https://tailwindcss.com/docs/guides/nextjs">
                  <a target="_blank" rel="noopener noreferrer">
                    <span className="pl-4 font-medium underline underline-offset-4 text-offBlack hover:underline hover:text-offBlack/75">
                      Tailwind CSS
                    </span>
                  </a>
                </Link>
                <span className="">,</span>
              </h2>
            </div>
          </li>
          <li className="m-0">
            <div className="">
              <h2 className="text-20">
                <span className="">and is</span>
                <span className="pl-4">hosted</span>
                <span className="pl-4">on</span>
                <Link href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
                  <a target="_blank" rel="noopener noreferrer">
                    <span className="pl-4 font-medium underline underline-offset-4 text-offBlack hover:underline hover:text-offBlack/75">
                      Vercel
                    </span>
                  </a>
                </Link>
                <span className="">.</span>
              </h2>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mb-32">
        <Link href="https://github.com/EvanCNavarro/portfolio">
          <a target="_blank" rel="noopener noreferrer">
            <div className="group flex border-2 border-offGray hover:border-offBlack rounded h-fit w-fit pt-8 pb-8 pl-16 pr-16">
              <IoLogoGithub
                className="text-offGray group-hover:text-offBlack"
                size={24}
              />
              <span className="pl-12 font-bold text-offGray group-hover:text-offBlack">
                View on GitHub
              </span>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}