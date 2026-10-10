import Link from "next/link";
import Image from "next/image";

import { Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="custom-wrapper grid grid-cols-1 gap-10 px-6 lg:px-12 py-12 md:grid-cols-2 lg:grid-cols-[2.2fr_0.8fr_1fr_1.3fr] lg:gap-12 lg:py-20">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={300}
            height={300}
            className="w-auto max-h-17.5 md:max-h-18.75"
          />

          <p className="mt-7 max-w-100 text-[13px] leading-[1.9] tracking-[0.14em]">
            We want to make getting started simple. You’re welcome to come into
            our office in Newbury Park or schedule virtual appointments from
            anywhere in CA—whatever works best for you.
          </p>
        </div>

        <div>
          <h5 className="mb-6 text-[13px] uppercase tracking-[0.15em]">
            Navigate
          </h5>

          <ul className="space-y-2 text-[12px] tracking-[0.15em]">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-[13px] uppercase tracking-[0.15em]">
            Our Team
          </h3>

          <ul className="space-y-2 text-[12px]">
            {[
              "Jennifer Anderson",
              "Heather Williams-Baumgart",
              "Autumn Bodily",
              "Candace Bletscher",
              "Samantha Johnson",
              "Rosa Gomez",
              "Chad Flores",
              "Simran Sidhu",
              "Jessica Jauregui",
            ].map((name) => (
              <li key={name}>
                <Link href="/home" className="hover:underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-[13px] uppercase tracking-[0.15em]">
            Contact
          </h3>

          <address className="space-y-1 text-[12px] not-italic leading-[1.8]">
            <p>925 Broadbeck Dr</p>
            <p>Suites 200 and 225</p>
            <p>Newbury Park, CA 91320</p>
            <p>
              <a
                href="mailto:info@conejovalleycounseling.com"
                className="wrap-break-word hover:underline"
              >
                info@conejovalleycounseling.com
              </a>
            </p>
            <p>
              <a href="tel:8052423120" className="hover:underline">
                805.242.3120
              </a>
            </p>

            <p className="pt-5 italic">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
              &amp; Simi Valley
            </p>
          </address>
        </div>
      </div>

      <div className="bg-[#87B5B5] text-white">
        <div className="custom-wrapper py-4 font-sans text-[12px]">
          <div className="flex items-center justify-center gap-x-1 gap-y-2">
            <Link href="/home" className="hover:underline">
              Terms
            </Link>
            <span>|</span>
            <Link href="/home" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/home" className="hover:underline">
              Disclaimer
            </Link>
            <span>|</span>
            <span>Website by Walker Strategy Co.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
