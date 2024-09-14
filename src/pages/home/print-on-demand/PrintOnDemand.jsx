import { Button } from "@/components/ui/button";
import banner from "../../../assets/images/download4.gif";

const PrintOnDemand = () => {
  return (
    <div className="md:mt-0 mb-2 lg:p-0 p-5 bg-[#FAF6EF]">
      <div className="mx-auto h-full px-4  sm:max-w-xl md:max-w-full md:px-24  lg:max-w-screen-xl lg:px-6">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div>
            <div className="lg:max-w-xl ">
              <p className="text-[22px] font-Georama font-medium mb-4">
                For print on demand sellers
              </p>
              <h2 className="font-Georama   text-4xl lg:text-6xl font-medium">
                Accelerate business growth with innovative design tools and apps
              </h2>
              <h4 className="font-Georama text-2xl font-medium my-8">
                Sign up for free and only pay for what you sell
              </h4>
            </div>
            <div className="flex gap-4">
              <Button className="rounded-full">Get start for free</Button>
            </div>
          </div>
          <div className="lg:w-[600px] lg:h-[600px]">
            <img src={banner} alt="Banner" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintOnDemand;
