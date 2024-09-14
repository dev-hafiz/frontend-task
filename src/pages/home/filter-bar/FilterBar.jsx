import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";

export function FilterBar() {
  return (
    <div className="lg:block hidden sticky top-16 bg-white z-40">
      <div className="px-5 lg:px-80 flex gap-3 border-t-[1px] border-b-[1px] py-2">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Start selling
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Tools and apps
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  Pro seller
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Georama font-semibold">
                  GlatoContact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-5">
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Best sellers <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Mens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Womens <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex  justify-between w-full mb-3"
                    >
                      Kids & baby <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Wall Mart <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-between w-full mb-3"
                    >
                      Photo <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
