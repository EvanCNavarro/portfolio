import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="align-center">
        <div
          className="
          mt-24 text-36 inline-block text-left
          m-360:text-40
          m-400:text-44
        "
        >
          <div className="mt-0 flex">
            <span className="font-medium text-offGray mr-4">
              Hello, my name is
            </span>
          </div>
          <div>
            <strong className="text-offBlack">
              Evan C. Navarro
            </strong>
            <medium className="text-offGray group-hover:text-offGray/75">
              .
            </medium>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-24">
            <medium className="text-offGray mr-4">I'm a</medium>
            <strong className="text-offBlack mr-0">Jr. Product Designer</strong>
            <medium className="text-offGray mr-0">,</medium>
          </h2>

          <h2 className="text-24">
            <medium className="text-offGray mr-4">
              working remotely out of
            </medium>
          </h2>

          <h2 className="text-24">
            <strong className="text-offBlack mr-0">Orlando, FL, USA</strong>
            <medium className="text-offGray mr-0">.</medium>
          </h2>
        </div>
      </div>
    </>
  );
}
