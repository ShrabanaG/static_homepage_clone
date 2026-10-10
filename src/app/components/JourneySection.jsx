import Image from "next/image";

import { JourneySectionImage } from "../assets";

const JourneySection = () => {
  return (
    <section className="content-wrapper">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <Image
            src={JourneySectionImage}
            alt="Family Holding Hand"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full lg:w-[35%] items-end">
          <p className="font-large-heading text-[30px] lg:text-[40px] leading-[1.4]">
            <span>Honoring where you’ve been</span> <em>&</em>{" "}
            <span>helping shape where you’re headed.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
