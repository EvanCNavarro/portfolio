import Image from "next/image";
import heroImageMobile from "/public/images/Personal_Branding_Portfolio_2022_HeroImage_V2.png";

export default function HeroImageMobile() {
  return (
    <>
      <div
        className="
        mt-0 relative flex
        t:w-560 t:flex t:content-start
        d:w-400
        "
      >
        <Image src={heroImageMobile} alt="Mobile Hero Image" objectFit="fill" className="" />
      </div>

    </>
  );
}
