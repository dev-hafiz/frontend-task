import { FilterBar } from "../filter-bar/FilterBar";
import Hero from "../hero/Hero";
import NavBar from "../nav-bar/NavBar";
import TopBar from "../top-bar/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <FilterBar />
      <Hero />
    </div>
  );
};

export default Home;
