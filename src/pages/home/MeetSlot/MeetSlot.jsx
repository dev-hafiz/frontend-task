import { Button } from "@/components/ui/button";
import banner from "../../../assets/images/download6.webp";

const MeetSlot = () => {
  return (
    <div className="lg:py-10 lg:p-0 p-5 bg-[#FAF6EF]">
      <div className="mx-auto h-full px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 md:py-7 lg:max-w-screen-xl lg:px-6">
        <div className="flex gap-10 flex-col-reverse items-center justify-between lg:flex-row">
          <div className="p-4">
            <div className="lg:max-w-xl ">
              <h2 className="font-Georama text-4xl lg:text-6xl font-medium lg:-mt-0 -mt-52 ">
                Meet <br className="lg:block hidden" /> GelatoConnect at{" "}
                <br className="lg:block hidden" /> Printing United
              </h2>

              <p className="font-Georama text-base mt-10 text-[#2f2f2f] tracking-wide mb-10 font-normal">
                Meet us at Printing United from September 10-12 in Las Vegas.
                Book your meeting slot to discover the innovative ways
                GelatoConnect is transforming the landscape and driving success
                for businesses like yours.
              </p>
            </div>
            <div>
              <Button className="rounded-full ">Book a meeting</Button>
            </div>
          </div>
          <div className=" lg:w-[644px] mt-5 lg:h-[432px] lg:p-0 p-16 w-[550px] h-[550px]">
            <img src={banner} alt="Banner" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetSlot;
