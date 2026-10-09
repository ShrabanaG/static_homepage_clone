import Image from "next/image";
import { HeaderImage3 } from "../assets";

const HeroDescriptionSection = () => {
  return (
    <section className="grid grid-cols-1 mt-10 lg:grid-cols-[70%_30%]">
      {/* Left content */}
      <div className="px-6 py-12 sm:px-10 lg:px-[12.7%] lg:py-20">
        <p className="font-large-heading text-xl leading-[1.35] lg:text-[50px] tracking-tight lg:leading-[1.65] font-light">
          You’re holding onto hope that life can be better than it is right now.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:gap-10">
          <div>
            <p className="font-sans text-sm uppercase leading-[1.9] tracking-[0.14em] sm:text-base">
              At Conejo Valley Family Counseling we want to make that hope a
              reality.
            </p>

            <p className="mt-5 font-sans text-[14px] tracking-wider whitespace-pre-wrap leading-[1.9] sm:text-lg">
              Whether you're an adult seeking personal growth, looking to work
              through your trauma, a couple working on your relationship, or a
              parent looking for support for your child, we provide a
              compassionate and safe space to help you navigate all of life’s
              ups and downs.
            </p>

            <div className="relative grid lg:hidden min-h-50 ">
              <Image
                src={HeaderImage3}
                alt="Gentle waves reaching the beach"
                fill
                sizes="(max-width: 1023px) 100vw, 30vw"
                className="object-cover object-[70%_50%]"
              />
            </div>
          </div>

          <div>
            <p className="font-sans text-[14px] tracking-wider whitespace-pre-wrap leading-[1.9] sm:text-lg">
              First and foremost, we believe what you’re going through is real,
              valid, and worthy of support. Our team offers clients in the
              Newbury Park area and across CA an environment to discover a new
              life and a deeper sense of self in the midst of their struggles.
              As we tap into the power of connection and understanding, you can
              find your footing again and take a transformative path forward.
            </p>
          </div>
        </div>
      </div>

      {/* Right beach image */}
      <div className="relative hidden lg:inline-block min-h-87.5 sm:min-h-120 lg:min-h-205">
        <Image
          src={HeaderImage3}
          alt="Gentle waves reaching the beach"
          fill
          sizes="(max-width: 1023px) 100vw, 30vw"
          className="object-cover object-[70%_50%]"
        />
      </div>
    </section>
  );
};

export default HeroDescriptionSection;
