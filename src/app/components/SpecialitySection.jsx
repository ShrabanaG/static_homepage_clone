import Link from "next/link";

import { ourSpecialityContent } from "../constants";

const SpecialitySection = () => {
  return (
    <section className="custom-wrapper">
      <div className="flex flex-col lg:flex-row gap-12 p-8 lg:p-10 m-0 lg:m-4">
        <div className="w-full lg:w-[30%]">
          <p className="font-large-heading text-[25px] lg:text-[40px] ">
            <span>Our</span>
            <em className="ml-4">specialities</em>
            <span className="inlie-block lg:block ml-4 lg:ml-0">
              include...
            </span>
          </p>
        </div>
        <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 ">
          {ourSpecialityContent.map((each, index) => {
            const { id, header, desc } = each;
            return (
              <div className="flex flex-col gap-6 px-5 py-4" key={id}>
                <h5
                  className={`font-large-heading text-[21.5px] lg:text-[23.5px] ${(id === 3 || id === 4) && "mt-0 lg:mt-20"}`}
                >
                  {header}
                </h5>
                <p className="text-[12.5px] font-sans leading-6 tracking-[0.25em] h-50">
                  {desc}
                </p>
                <Link
                  href="/home"
                  className="underlined-btn font-sans text-[10px] tracking-[0.14em] mt-6 uppercase"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialitySection;
