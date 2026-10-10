import AppointmentSection from "../components/AppointmentSection";
import ExpertiseSection from "../components/ExpertiseSection";
import Header from "../components/Header";
import HowWeWorkSection from "../components/HowWeWorkSection";
import ImageSection from "../components/ImageSection";
import JourneySection from "../components/JourneySection";
import SpecialitySection from "../components/SpecialitySection";
import WhoWeHelpSection from "../components/WhoWeHelpsection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <WhoWeHelpSection />
      <ImageSection />
      <ExpertiseSection />
      <HowWeWorkSection />
      <JourneySection />
      <SpecialitySection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Home;
