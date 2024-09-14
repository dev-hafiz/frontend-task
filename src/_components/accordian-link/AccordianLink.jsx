import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordianLink = () => {
  return (
    <Accordion type="single" className="mb-5 w-3/4 " collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="text-xl font-Georama">Print On Demand</h4>
        </AccordionTrigger>
        <AccordionContent>
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
        </AccordionContent>
        <AccordionTrigger>
          <h4 className="text-xl font-Georama">Integrations</h4>
        </AccordionTrigger>
        <AccordionContent>
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
        </AccordionContent>
        <AccordionTrigger>
          <h4 className="text-xl font-Georama">Start selling</h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="cursor-pointer text-sm hover:text-gray-400">
            Embroidery
          </p>
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
        </AccordionContent>
        <AccordionTrigger>
          <h4 className="text-xl font-Georama">Company</h4>
        </AccordionTrigger>
        <AccordionContent>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordianLink;
