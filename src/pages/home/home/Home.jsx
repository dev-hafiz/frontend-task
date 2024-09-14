import { FilterBar } from "../filter-bar/FilterBar";
import GelatoConnect from "../GelatoConnect/GelatoConnect";
import Hero from "../hero/Hero";
import MeetSlot from "../MeetSlot/MeetSlot";
import NavBar from "../nav-bar/NavBar";
import PrintOnDemand from "../print-on-demand/PrintOnDemand";
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
      <PrintOnDemand />
      <GelatoConnect />
      <MeetSlot />
    </div>
  );
};

export default Home;
