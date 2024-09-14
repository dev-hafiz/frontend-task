import { Button } from "@/components/ui/button";
import apple from "../../../../assets/images/aple.svg";
import android from "../../../../assets/images/android.svg";
import AccordianLink from "@/_components/accordian-link/AccordianLink";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const MidFooter = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-6">
      <div className="lg:col-span-4 col-span-12 lg:pl-0 pl-10">
        <p className="text-sm">
          Gelato has created the world&apos;s largest network for local
          production and distribution of customized products. Together we bring
          creativity to life - and into business.
        </p>
        <Button
          variant="secondary"
          className="rounded-full mt-6 px-5 font-medium mb-10"
        >
          Get started
        </Button>

        {/* for small screen  */}
        <div className="md:hidden lg:hidden block">
          <AccordianLink />
        </div>

        <div>
          <p className="text-base mb-2 font-Georama">Get the app</p>
          <div className="flex gap-2">
            <img src={apple} alt="apple store" />
            <img src={android} alt="play store" />
          </div>
        </div>

        <div className="lg:hidden block my-10 mr-5 ">
          <p className="font-Georama text-base mb-4">Find Gelato on:</p>
          <div className="flex justify-between items-center gap-5">
            <div className="w-10 h-10 bg-black hover:bg-[#181818] rounded-full flex justify-center items-center">
              <FaInstagram className="h-6 w-6" />
            </div>
            <div className="w-10 h-10 bg-black hover:bg-[#181818] rounded-full flex justify-center items-center">
              <FaFacebookF className="h-6 w-6" />
            </div>

            <div className="w-10 h-10 bg-black hover:bg-[#181818] rounded-full flex justify-center items-center">
              <FaTiktok className="h-6 w-6" />
            </div>
            <div className="w-10 h-10 bg-black hover:bg-[#181818] rounded-full flex justify-center items-center">
              <FaLinkedinIn className="h-6 w-6" />
            </div>
            <div className="w-10 h-10 bg-black hover:bg-[#181818] rounded-full flex justify-center items-center">
              <FaYoutube className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:block hidden">
        <h6 className="font-Georama  text-base mb-3">Print on demand</h6>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          What is print on demand?
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Product catalog
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Shipping and delivery
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Dropshipping products
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Pro sellers
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          White label products
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Returns policy
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Global, yet local
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Sustainability
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Support</p>
      </div>
      <div className="col-span-1 lg:block hidden">
        <h6 className="font-Georama  text-base mb-3">Integrations</h6>
        <p className="cursor-pointer text-sm hover:text-gray-400">Shopify</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Etsy</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          WooCommerce
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Wix</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Squarespace
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          BigCommerce
        </p>
      </div>
      <div className="col-span-2  lg:block hidden">
        <h6 className="font-Georama  text-base mb-3">Start selling</h6>
        <p className="cursor-pointer text-sm hover:text-gray-400">Embroidery</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand t-shirts
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand hoodies
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand posters
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand canvas
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand calendars
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand mugs
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Custom products
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Custom clothing
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Custom merchandise
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Custom phone cases
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand Europe
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand UK
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand France
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Print on demand Canada
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Merch maker
        </p>
      </div>
      <div className="col-span-3  lg:block hidden">
        <h6 className="font-Georama  text-base mb-3">Company</h6>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          GelatoConnect
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          About Gelato
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Leadership team
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Board & investors
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Newsroom</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Blog</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Customer Stories
        </p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Partners</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">Careers</p>
        <p className="cursor-pointer text-sm hover:text-gray-400">
          Affiliates program
        </p>
      </div>
    </div>
  );
};

export default MidFooter;
