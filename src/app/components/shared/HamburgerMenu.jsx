const HamburgerMenu = ({ open, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
      aria-label="Toggle Menu"
    >
      {/* Top Line */}
      <span
        className={`h-0.5 w-8 rounded bg-black transition-all duration-300 ease-in-out ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      {/* Middle Line */}
      <span
        className={`h-0.5 w-8 rounded bg-black transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      />
      {/* Bottom Line */}
      <span
        className={`h-0.5 w-8 rounded bg-black transition-all duration-300 ease-in-out ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
