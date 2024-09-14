import logo from "../../../../assets/images/_logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="flex lg:px-0 px-10 justify-between items-center">
      <img className="w-[130px] h-[36px]" src={logo} alt="footer logo" />
      <div className="lg:block hidden ">
        <div className="flex justify-between items-center gap-5">
          <p className="font-Georama text-base">Find Gelato on:</p>
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
  );
};

export default TopFooter;
