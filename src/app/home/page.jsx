import ExpertiseSection from "../components/ExpertiseSection";
import Header from "../components/Header";
import ImageSection from "../components/ImageSection";
import WhoWeHelpSection from "../components/WhoWeHelpsection";

const Home = () => {
  return (
    <div>
      <Header />
      <WhoWeHelpSection />
      <ImageSection />
      <ExpertiseSection />
    </div>
  );
};

export default Home;
