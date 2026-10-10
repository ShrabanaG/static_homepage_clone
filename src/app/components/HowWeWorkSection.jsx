import Image from "next/image";

import { SectionImage2 } from "../assets";

const HowWeWorkSection = () => {
  return (
    <section className="content-wrapper bg-[#e3d9ca]">
      <h5 className="font-sans text-[15px] ml-0 lg:ml-30 p-5 lg:p-10 uppercase tracking-wider">
        How We Work
      </h5>
      <div className="grid grid-cols-1 m-0 lg:mt-10 lg:mb-10 lg:ml-5 lg:grid-cols-[75%_25%]">
        {/*Left content */}
        <div className="px-6 py-4 lg:px-[12%] lg:py-20">
          <p className="font-large-heading text-3xl leading-[1.35] lg:text-[50px] tracking-tight lg:leading-[1.65] font-light">
            We’re here to make a difference.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:gap-10">
            <div>
              <div className="relative grid lg:hidden min-h-50 mb-6">
                <Image
                  src={SectionImage2}
                  alt="Woman and Child are playing"
                  fill
                  sizes="(max-width: 1023px) 100vw, 30vw"
                  className="object-cover object-[70%_50%]"
                />
              </div>
              <p className="text-[13px] uppercase leading-[1.65] tracking-[0.12em]">
                The clients we work with are balancing so many things at once,
                it’s often hard for them to put themselves first.
              </p>
              <p className="mt-5 text-[13px] tracking-wider whitespace-pre-wrap leading-[1.9]">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that no
                two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work, we’re
                ready to help.
              </p>
            </div>
            <div>
              <p className="text-[13px] tracking-wider whitespace-pre-wrap leading-[1.9]">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you’ve learned in your
                daily life. We take what we do seriously because we know how
                important it is for you to heal from what’s hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>
            </div>
          </div>
        </div>
        {/* Right Content */}
        {/* Right beach image */}
        <div className="relative hidden lg:inline-block min-h-90">
          <Image
            src={SectionImage2}
            alt="Mother & Child are playing"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-[70%_50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
