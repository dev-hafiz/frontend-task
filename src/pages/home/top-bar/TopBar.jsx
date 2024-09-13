import { CircleAlert } from "lucide-react";

const TopBar = () => {
  return (
    <div className="h-10 bg-black text-white">
      <h4 className="font-Georama cursor-pointer  text-base flex items-center justify-center font-light underline pt-2">
        FREE SHIPPING for orders over $300. Order today
        <CircleAlert className="ml-3 w-4 h-4" />
      </h4>
    </div>
  );
};

export default TopBar;
