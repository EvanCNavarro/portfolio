import Link from "next/link";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export default function WorkOverview() {
  return (
    <>
      <hr class="w-88 h-4 bg-teal mt-40 mb-32" />
      <div className="mb-24">
        <Link href="#work">
          <a className="group mb-24">
            <h1 className=" text-32 mt-0 mb-2 space-x-12">
              <strong className=" text-offGray group-hover:text-offGray/75">
                #
              </strong>
              <strong className="text-offBlack group-hover:text-offBlack/75">
                Work
              </strong>
            </h1>
          </a>
        </Link>
      </div>

      <div className="border-4 rounded-lg p-16 border-offWhite">
        <h3 className="font-bold text-16 text-offGray mr-0">Previous:</h3>

        <hr class="h-4 bg-offWhite mt-8 mb-16" />

        <ul class="list-disc pl-24 marker:text-offGray">
          <div className="p-4 rounded hover:bg-offWhite">
            <li className="m-0 pl-8">
              <div className="flex justify-between">
                <h4 className="text-16 text-offGray/50 italic">
                  <span className="font-bold text-offGray ">Design Intern</span>
                  <span className="pl-4 font-medium">@ Cloudentity</span>
                  {/* <span className="pl-4 pr-4"> — </span> 2021 */}
                </h4>
              </div>
            </li>
          </div>
          <div className="p-4 rounded hover:bg-offWhite">
            <li className="m-0 pl-8">
              <div className="flex justify-between">
                <h4 className="text-16 text-offGray/50 italic">
                  <span className="font-bold text-offGray ">Bank Teller</span>
                  <span className="pl-4 font-medium">@ Addition</span>
                </h4>
              </div>
            </li>
          </div>
          <div className="p-4 rounded hover:bg-offWhite">
            <li className="m-0 pl-8">
              <div className="flex justify-between">
                <h4 className="text-16 text-offGray/50 italic">
                  <span className="font-bold text-offGray ">Assistant</span>
                  <span className="pl-4 font-medium">@ Murph Media</span>
                </h4>
              </div>
            </li>
          </div>
          <div className="p-4 rounded hover:bg-offWhite">
            <li className="m-0 pl-8">
              <div className="flex justify-between">
                <h4 className="text-16 text-offGray/50 italic">
                  <span className="font-bold text-offGray ">Sales</span>
                  <span className="pl-4 font-medium">@ American Express</span>
                </h4>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
