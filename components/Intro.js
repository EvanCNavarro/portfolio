import Link from "next/link";

export default function Intro() {
  return (
    <>
      {/* <hr class="w-88 h-4 bg-teal mt-32 mb-32" /> */}

      <div className="mt-24">
        <h1 className="text-32">
          <medium className="text-offGray group-hover:text-offGray/75 mr-4">
            Hello, my name is
          </medium>
        </h1>
        <h1 className="text-32 ">
          <strong className="text-offBlack group-hover:text-offGray/75">
            Evan C. Navarro
          </strong>
          <medium className="text-offGray group-hover:text-offGray/75">
            .
          </medium>
        </h1>
      </div>

      <div className="mt-24">
        <h2 className="text-24">
          <medium className="text-offGray mr-4">I'm a</medium>
          <strong className="text-offBlack mr-0">Jr. Product Designer</strong>
          <medium className="text-offGray mr-0">,</medium>
        </h2>

        <h2 className="text-24">
          <medium className="text-offGray mr-4">working remotely out of</medium>
        </h2>

        <h2 className="text-24">
          <strong className="text-offBlack mr-0">Orlando, FL, USA</strong>
          <medium className="text-offGray mr-0">.</medium>
        </h2>
{/* 
        <h3 className="text-16 mt-24">
          <span className="text-offGray font-medium">
            Design, Development, & Kombucha
          </span>
        </h3> */}
      </div>

      {/* <Link href="#Projects">
        <a className="group">
          <h1 className=" text-32 mt-0 mb-2 space-x-12">
            <strong className=" text-offGray group-hover:text-offGray/75">
              #
            </strong>
            <strong className="text-offBlack group-hover:text-offBlack/75">
              Recent Projects
            </strong>
          </h1>
        </a>
      </Link> */}
    </>
  );
}
