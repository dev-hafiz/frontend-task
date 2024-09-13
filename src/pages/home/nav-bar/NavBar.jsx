import { Button } from "@/components/ui/button";
import logo from "../../../assets/images/logo.svg";
import { Globe, Headset } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import SideBar from "@/_components/side-bar/SideBar";

const NavBar = () => {
  return (
    <div className="mx-5 lg:mx-80">
      <div className="p-4 flex flex-wrap justify-between md:justify-between">
        <div className="lg:hidden block">
          {/* sheet  */}
          <SideBar />
        </div>
        <div>
          <img src={logo} alt="website logo" className="w-[130px] h-[27px]" />
        </div>
        <div className="flex gap-2">
          <div className=" md:block hidden">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 mr-2"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Cart
              </Button>
              <Button
                className="rounded-full font-Georama font-semibold flex items-center"
                variant="ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in
              </Button>
            </div>
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
