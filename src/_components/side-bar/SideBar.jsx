import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, MenuIcon, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b-[1px] pb-4">
          <div className="flex items-center justify-evenly mt-4">
            <Button className="rounded-full">Sign up for free</Button>
            <div className="w-[1px] h-10 bg-gray-300"></div>
            <Button
              className="rounded-full font-Georama font-semibold flex items-center"
              variant="ghost"
            >
              <UserRound className="mr-2" />
              Sign in
            </Button>
          </div>
        </SheetHeader>

        {/* Content starts from here */}
        <div className="mt-5">
          <Button variant="ghost" className="flex justify-between w-full ">
            Products <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            Start Selling <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            Tools and apps <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            Pricing <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            Resources <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            Pro sellers <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex justify-between w-full ">
            GelatoContact <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
