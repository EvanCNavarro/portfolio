import { useState, useEffect } from "react";
import HeroImageDesktop from "./HeroImageDesktop";
import HeroImageMobile from "./HeroImageMobile";
import HeroText from "./HeroText";

export default function Hero() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isDesktop = screenWidth > 1000;

  return (
    <>
      <div className="
            relative my-[12%] flex space-x-[6.25%]
            t:my-64
        "
      >
        {isDesktop ? (
          <div id="desktop-portion flex t:">
            <HeroImageDesktop />
          </div>
        ) : null}

        <div id="mobile-portion">
          <HeroImageMobile />
          <div className="mt-20 flex justify-center">
            <HeroText />
          </div>
        </div>
      </div>
    </>
  );
}
