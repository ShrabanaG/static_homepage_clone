import Image from "next/image";

import { whoWeHelpContent } from "../constants";

const WhoWeHelpSection = () => {
  return (
    <section className="content-wrapper bg-white">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_3fr] lg:gap-10">
        <h1 className="flex items-start mx-[8%] gap-3 self-start text-2xl lg:text-3xl lg:ml-[20%]">
          <span>Who </span>
          <span>We</span>
          <em>Help</em>
        </h1>
      </div>

      <div className="grid grid-cols-1 mx-[6%] gap-8 mt-12 lg:grid-cols-3 lg:ml-[11%] lg:mr-[5%]">
        {whoWeHelpContent.map((each) => (
          <article key={each.header} className="flex flex-col gap-3">
            {/* Image container */}
            <div className="relative aspect-4/4 lg:aspect-5/7 w-full overflow-hidden">
              <Image
                src={each.srcImage}
                alt={each.header}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 26vw"
                className="object-cover object-center"
              />
            </div>

            <div className="font-large-heading text-[20px] lg:text-[23px]">
              {each.header}
            </div>

            <p className="font-sans text-[12px] leading-6  tracking-widest font-extralight lg:text-[15px] antialiased">
              {each.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
