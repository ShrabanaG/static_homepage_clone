"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "../assets";
import HamburgerMenu from "./shared/HamburgerMenu";
import { navItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const contactButtonStyleClass =
    "border border-black-primary flex h-12 w-32 items-center justify-center rounded-[50%] tracking-[3px]";

  return (
    <nav className="flex items-start justify-between px-10 font-sans">
      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className="w-auto max-h-17.5 md:max-h-18.75"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center gap-10 py-10">
        {navItems.map((item, index) => {
          return (
            <Link
              href={item.href}
              className={`uppercase text-black-primary tracking-widest text-[13px] no-underline ${index === navItems.length - 1 ? contactButtonStyleClass : ""}`}
              key={index}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      {/* Hamburger Menu */}
      <div className="flex lg:hidden items-center justify-center p-4">
        <HamburgerMenu open={isOpen} toggleMenu={handleToggleMenu} />
      </div>
      <div
        className={`fixed lg:hidden top-10 left-0 h-screen w-screen bg-background-primary px-10 py-10 mt-5 text-black-primary shadow-lg transition-opacity duration-500 overflow-y-scroll ${
          isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex  flex-col items-start justify-between gap-4  uppercase">
          {navItems.map((each, index) => {
            return (
              <Link
                href={each.href}
                className={`flex items-start justify-start gap-3 px-3 py-4 tracking-widest ${index === navItems.length - 1 ? contactButtonStyleClass : "text-3xl"}`}
                key={index}
              >
                <span>{each.label}</span>
                {index !== 0 &&
                  index !== navItems.length - 2 &&
                  index !== navItems.length - 1 && (
                    <span className="pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="30"
                        viewBox="0 0 24 30"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 3 L21 15 L6 27"
                          stroke="#333333"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
              </Link>
            );
          })}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
