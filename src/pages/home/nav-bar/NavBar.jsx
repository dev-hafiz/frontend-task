import { Button } from "@/components/ui/button";
import logo from "../../../assets/images/logo.svg";
import {
  ChevronDown,
  Globe,
  Headset,
  ShoppingCartIcon,
  UserRound,
} from "lucide-react";
const NavBar = () => {
  return (
    <div className="mx-5 md:mx-80">
      <div className="p-4 flex flex-wrap justify-start md:justify-between">
        <div>
          <img src={logo} alt="website logo" className="w-[130px] h-[27px]" />
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Button
              className="rounded-full font-Georama text-base flex items-center"
              variant="ghost"
            >
              <Headset className="mr-2" />
              Contact us
            </Button>
            <Button
              className="rounded-full font-Georama text-base flex items-center"
              variant="ghost"
            >
              <Globe className="mr-2" />
              IN/EUR
              <ChevronDown className="w-4 h-4 mt-1 ml-1" />
            </Button>
            <Button
              className="rounded-full font-Georama text-base flex items-center"
              variant="ghost"
            >
              <ShoppingCartIcon className="mr-2" />
              Cart
            </Button>
            <Button
              className="rounded-full font-Georama text-base flex items-center"
              variant="ghost"
            >
              <UserRound className="mr-2" />
              Sign in
            </Button>
          </div>
          <div>
            <Button className="rounded-full">Sign up for free</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
