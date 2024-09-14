import { Button } from "@/components/ui/button";
import banner from "../../../assets/images/download5.gif";
const GelatoConnect = () => {
  return (
    <div className="lg:my-10 mb-2 lg:p-0 p-5">
      <div className="mx-auto h-full px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-6">
        <div className="flex gap-5 flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-[644px] lg:h-[644px] ">
            <img src={banner} alt="Banner" className="w-full" />
          </div>

          <div className="lg:max-w-xl pl-5">
            <p className="text-[22px] font-Georama font-medium mb-4">
              For print on demand sellers
            </p>
            <h2 className="font-Georama text-4xl lg:text-6xl font-medium">
              GelatoConnect
            </h2>
            <h4 className="font-Georama text-2xl font-medium my-8">
              Elevate efficiency, cut costs, and seamlessly automate with our
              all-in-one software solution for the print industry
            </h4>
            <Button className="rounded-full">Get start for free</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GelatoConnect;
