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
            <span className="font-normal text-offGray mr-4">
              Hello, my name is
            </span>
          </div>
          <div>
            <span className="font-extrabold text-offBlack">Evan C. Navarro</span>
            <span className="font-medium text-offGray group-hover:text-offGray/75">
              .
            </span>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-24">
            <span className="font-medium text-offGray mr-4">I'm a</span>
            <span className="font-semibold text-offBlack mr-0 ">
              Jr. Product Designer
            </span>
            <span className="font-medium text-offGray mr-0">,</span>
          </h2>

          <h2 className="text-24">
            <span className="font-medium text-offGray mr-4">
              working remotely out of
            </span>
          </h2>

          <h2 className="text-24">
            <span className="font-semibold text-offBlack mr-0">
              Orlando, FL, USA
            </span>
            <span className="font-medium text-offGray mr-0">.</span>
          </h2>
        </div>
      </div>
    </>
  );
}
