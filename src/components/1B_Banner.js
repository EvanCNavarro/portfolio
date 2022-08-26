import { useState, useEffect } from "react";

export default function Banner() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isDesktop = screenWidth > 475;

  return (
    <div
      className="
        inline-block justify-center text-center
        w-full h-fit py-12
        bg-[#FFCD48]
      "
    >
      <span className="text-16 text-black font-bold mr-12">
        [*: {screenWidth}]
      </span>
      <span>sm.480 / md.640 / lg.800 / xl.1000 / 2xl.1200</span>
      {/* <span
        className="
          font-black text-16 text-offBlack font-plexMono
          drop-shadow-lg
        "
      >
        🚧 SITE UNDER CONSTRUCTION 🚧
      </span> */}
    </div>
  );
}
