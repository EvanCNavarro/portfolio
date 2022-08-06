import Link from "next/link";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { ProjectCard } from "../components/ProjectCard";

export default function RecentProjects() {
  return (
    <>
      <hr class="w-88 h-4 bg-teal mt-40 mb-32" />
      <div className="mb-24">
        <Link href="#projects">
          <a className="group mb-24">
            <h1 className=" text-32 mt-0 mb-2 space-x-12">
              <strong className=" text-offGray group-hover:text-offGray/75">
                #
              </strong>
              <strong className="text-offBlack group-hover:text-offBlack/75">
                Recent Projects
              </strong>
            </h1>
          </a>
        </Link>
      </div>
      <Link href="/projects/familychat">
        <a>
          <ProjectCard identifier="FamilyChat" />
        </a>
      </Link>
      <Link href="/projects/familychat">
        <a>
          <ProjectCard identifier="Objectively" />
        </a>
      </Link>
      <Link href="/projects/familychat">
        <a>
          <ProjectCard identifier="Notes" />
        </a>
      </Link>

      <Link href="/projects">
        <a className="group flex justify-center">
          <button className=" text-white font-bold p-2 bg-offBlack hover:bg-offBlack/75 rounded outline-none w-280 h-52">
            <div className="inline-flex items-center space-x-3 ml-12 mr-12">
              <div className="text-base">View All Projects</div>
              <MdArrowForward className="" size={20} />
            </div>
          </button>
        </a>
      </Link>
    </>
  );
}
