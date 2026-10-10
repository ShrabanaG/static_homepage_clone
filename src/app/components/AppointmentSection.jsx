import Image from "next/image";
import { AppointmentImage1, AppointmentImage2 } from "../assets";

const AppointmentSection = () => {
  return (
    <section className="custom-wrapper overflow-hidden bg-background-primary pb-10 lg:pb-0">
      <div className="flex flex-col lg:flex-row items-start pt-10 lg:pt-20">
        <div className="relative mt-10 h-50 w-1/2 self-start lg:self-end lg:mt-36 lg:h-142.5 lg:w-[12%] lg:shrink-0">
          <Image
            src={AppointmentImage1}
            alt="Sand on the beach"
            fill
            sizes="(max-width: 1023px) 50vw, 12vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#F6F3EB]/40" />
        </div>

        <div className="w-full px-5 lg:w-[54%] lg:px-30">
          <h5 className="mb-16 mt-10 lg:mt-0 font-sans text-sm uppercase tracking-[0.14em] leading-[1.8em]">
            Schedule an appointment
          </h5>

          <h1 className="font-large-heading text-[30px] leading-wide lg:text-[40px]">
            Find a therapist who is the right fit for{" "}
            <span className="font-moments text-[#8AB9BB]">you</span>.
          </h1>

          <p className="mt-6 font-sans leading-[1.8]">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we're here to support you with care
            and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>

          <p className="mt-5 font-sans">
            Click the button below to schedule an appointment.
          </p>

          <button className="mt-10 uppercase border border-black-primary flex h-12 w-32 items-center justify-center rounded-[50%] tracking-[3px] text-sm">
            Book now
          </button>
        </div>

        <div className="relative mt-10 h-60 w-full  lg:mt-0 lg:h-178.75 lg:w-[34%] lg:shrink-0">
          <div className="pl-10 lg:pl-0">
            <Image
              src={AppointmentImage2}
              alt="Person drawing in the sand at the beach"
              fill
              sizes="(max-width: 1023px) 100vw, 34vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
