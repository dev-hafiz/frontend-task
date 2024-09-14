import { Button } from "@/components/ui/button";
import { FilterBar } from "../filter-bar/FilterBar";
import Footer from "../footer/Footer";
import GelatoConnect from "../GelatoConnect/GelatoConnect";
import Hero from "../hero/Hero";
import MeetSlot from "../MeetSlot/MeetSlot";
import NavBar from "../nav-bar/NavBar";
import PrintOnDemand from "../print-on-demand/PrintOnDemand";
import SuccessInfo from "../success-info/SuccessInfo";
import TopBar from "../top-bar/TopBar";
import WhyGelato from "../why-gelato/WhyGelato";
import { Headset } from "lucide-react";

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
      <Footer />

      <Button className="rounded-full  font-Georama fixed bottom-5 right-10 z-50   font-medium flex items-center">
        <Headset className="mr-2" />
        Contact Us
      </Button>
    </div>
  );
};

export default Home;
