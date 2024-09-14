import BottomFooter from "./bottom-footer/BottomFooter";
import MidFooter from "./mid-footer/MidFooter";
import TopFooter from "./top-footer/TopFooter";

const Footer = () => {
  return (
    <div className="bg-black text-white lg:px-80 py-10">
      <TopFooter />
      <MidFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
