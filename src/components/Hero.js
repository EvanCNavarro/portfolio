import Image from "next/image";
import emojiHero from "/public/images/hero.png";

export default function Hero() {
  return (
    <>
      <div className="mt-32 mb-8 relative w-full max-w-2xl">
        <Image src={emojiHero} alt="Emoji Hero" objectFit="fill" className="" />
      </div>
    </>
  );
}
