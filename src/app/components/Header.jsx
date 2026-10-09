import HeroDescriptionSection from "./HeroDescriptionSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 bg-background-primary">
      {/* Navbar */}
      <Navbar />
      <HeroSection />
      <HeroDescriptionSection />
    </div>
  );
};

export default Header;
