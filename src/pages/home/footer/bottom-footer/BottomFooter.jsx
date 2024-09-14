import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BottomFooter = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between mt-10 lg:pl-0 pl-10">
      <div className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-2 gap-4">
        <p className="text-sm font-Georama hover:text-gray-400">Contact us</p>
        <span className="lg:block hidden">|</span>
        <p className="text-sm font-Georama hover:text-gray-400">Legal</p>
        <span className="lg:block hidden">|</span>
        <p className="text-sm font-Georama hover:text-gray-400">
          Privacy Policy
        </p>
        <span className="lg:block hidden">|</span>
        <p className="text-sm font-Georama hover:text-gray-400">
          Cookie Policy
        </p>
        <span className="lg:block hidden">|</span>
        <p className="text-sm font-Georama hover:text-gray-400">API terms</p>
        <span className="lg:block hidden">|</span>
        <p className="text-sm font-Georama hover:text-gray-400">Sitemap</p>
      </div>
      <div className="lg:mb-0 mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>English (India)</SelectLabel>
              <SelectItem value="english">English </SelectItem>
              <SelectItem value="canada">English (Canada)</SelectItem>
              <SelectItem value="Kingdom">English (United Kingdom)</SelectItem>
              <SelectItem value="australia">English (Australia)</SelectItem>
              <SelectItem value="china">中国</SelectItem>
              <SelectItem value="francais">Francais</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BottomFooter;
