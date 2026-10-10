import Image from "next/image";

import { SectionImage } from "../assets";

const ImageSection = () => {
  return (
    <section className="content-wrapper">
      <div className="h-120 w-full  relative">
        <Image
          src={SectionImage}
          alt="Kids Running At The beach"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute bg-black-primary/50 inset-0" />
        <p className="absolute inset-x-0 bottom-0 right-[20%] z-10 px-6 pb-10 font-large-heading text-[30px] leading-tight text-white sm:px-10 sm:pb-14 lg:px-16 lg:pb-20 lg:text-[45.5px]">
          <span>
            You deserve a place where your story is heard, valued, and
            understood.{" "}
          </span>
          <span className="italic">
            Nothing will be too heavy for us to carry together.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ImageSection;
