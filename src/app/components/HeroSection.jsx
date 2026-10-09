import Image from "next/image";
import Link from "next/link";
import { HeaderImage1, HeaderImage2 } from "../assets";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background-primary">
      {/* Content */}
      <div className="relative z-10 px-[6%] pt-8 lg:ml-[34%] lg:px-[8.5%] lg:pt-8">
        <p className="font-sans text-[11px] leading-[1.8] tracking-[0.13em] sm:text-sm lg:text-base">
          ONLINE &amp; IN-PERSON COUNSELING IN
          <br />
          NEWBURY PARK &amp; ACROSS CA
        </p>

        <div className="mt-7 lg:mt-0 lg:flex lg:min-h-150 lg:flex-col lg:justify-center">
          <h1 className="text-[30px] leading-[1.35] text-black-primary sm:text-4xl lg:text-5xl xl:text-[64px] xl:leading-normal">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <em className="text-text-strong">thrive</em>.
          </h1>

          <p className="mt-6 max-w-3xl font-sans font-extralight text-[12px] leading-[1.8] sm:text-base lg:mt-8 lg:text-lg">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          <Link
            href="/home"
            className="underlined-btn mt-6 font-sans text-[10px] tracking-[0.14em] sm:text-sm lg:mt-10"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Images */}
      <div className="relative mt-10 flex items-end justify-between gap-0 lg:absolute lg:inset-0 lg:mt-0 lg:block lg:pointer-events-none">
        {/* Main family image */}
        <div className="relative h-57 w-[70%] shrink-0 sm:h-105 lg:absolute lg:left-0 lg:top-[6%] lg:h-[94%] lg:w-[34%]">
          <Image
            src={HeaderImage1}
            alt="Family spending time together at the beach"
            fill
            priority
            sizes="(max-width: 1023px) 70vw, 34vw"
            className="object-cover object-center"
          />
        </div>

        {/* Narrow beach image */}
        <div className="relative h-37 w-[14%]  lg:absolute lg:right-0 lg:top-[48%] lg:h-85 lg:w-[8%]">
          <Image
            src={HeaderImage2}
            alt="Header_Image_2"
            fill
            sizes="(max-width: 1023px) 14vw, 8vw"
            className="object-cover object-[70%_50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
