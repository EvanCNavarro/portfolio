export default function HeroText() {
  return (
    <>
      <div className="">
        <div
          className="
          mt-0 text-[11vw] text-left flex flex-wrap t:space-x-3
          t:text-52
        "
        >
          <span className="font-normal text-offGray">Hello, my name is</span>
          <span className="font-extrabold text-offBlack">
            Evan C. Navarro
            <span className="font-normal text-offGray group-hover:text-offGray/75">
              .
            </span>
          </span>
        </div>
        <div
          className="
          mt-20 text-[6vw] text-left flex flex-wrap
          t:text-36
        "
        >
          <div className="space-x-2">
            <span className="font-thin text-offGray/50 text-16">✦</span>
            <span className="font-medium text-offGray">{"I'm a"}</span>
            <span className="font-bold text-offBlack">
              Product Designer
              <span className="font-medium text-offGray">,</span>
            </span>
          </div>
          <div className="space-x-2">
            <span className="font-thin text-offGray/50 text-16">✦</span>
            <span className="font-medium text-offGray">
              working remotely out of
            </span>
            <span className="font-bold text-offBlack">
              Orlando, FL, USA
              <span className="font-medium text-offGray">.</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
