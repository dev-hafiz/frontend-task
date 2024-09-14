import { FilterBar } from "../filter-bar/FilterBar";
import Hero from "../hero/Hero";
import NavBar from "../nav-bar/NavBar";
import SuccessInfo from "../success-info/SuccessInfo";
import TopBar from "../top-bar/TopBar";
import WhyGelato from "../why-gelato/WhyGelato";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <FilterBar />
      <Hero />
      <SuccessInfo />
      <WhyGelato />
    </div>
  );
};

export default Home;
