import Image from "next/image";
import heroImageDesktop from "/public/images/Personal_Branding_2022_Graduation_EDITED_1.png";

export default function HeroImageDesktop() {
  return (
    <>
      <div
        className="
        mt-0 relative flex h-fit w-256 
        "
      >
        <Image src={heroImageDesktop} alt="Desktop Hero Image" objectFit="fill" className="rounded-lg" />
      </div>

    </>
  );
}
