import { Button } from "@/components/ui/button";
import logo from "../../../assets/images/logo.svg";
import {
  ChevronDown,
  Globe,
  Headset,
  ShoppingCartIcon,
  UserRound,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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
              className="rounded-full font-Georama font-semibold flex items-center"
              variant="ghost"
            >
              <Headset className="mr-2" />
              Contact us
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <div className=" font-Georama font-semibold  flex items-center">
                      <Globe className="mr-2" />
                      IN/EUR
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className="p-4">
                        <Button variant="ghost">Language - IN</Button>
                        <Button className="mt-4" variant="ghost">
                          Currency - ERU
                        </Button>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="rounded-full font-Georama font-semibold  flex items-center"
              variant="ghost"
            >
              <ShoppingCartIcon className="mr-2" />
              Cart
            </Button>
            <Button
              className="rounded-full font-Georama font-semibold flex items-center"
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
