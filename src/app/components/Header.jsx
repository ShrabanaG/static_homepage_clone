import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar */}
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
