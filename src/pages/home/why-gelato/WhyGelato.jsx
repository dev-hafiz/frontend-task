import banner from "../../../assets/images/download3.webp";
const WhyGelato = () => {
  return (
    <div className="mx-5 lg:mx-80">
      <h1 className="text-center font-Georama lg:text-6xl text-3xl font-medium  pt-4">
        Why choose Gelato
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 px-5 lg:px-0">
        <div className="-mt-8 lg:-mt-0">
          <img src={banner} alt="Banner" />
        </div>

        <div className="mb-7 ">
          <div>
            <h4 className="text-[24px] tracking-wide -mt-1 font-Georama font-medium">
              ▻ World&apos;s largest print-on-demand network
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              140+ print partners in 32 countries. Gelato is a truly global
              service.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ Sell globally, produce locally
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              Your products are produced close to your customers, wherever they
              are.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ 100% free editing tools
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              Create your custom products using our suite of{" "}
              <span className="underline cursor-pointer hover:text-[#b4b4b4] text-[#8d8d8d]">
                free tools
              </span>
              .
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ 60+logistics partners
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              Our global network of logistics partners ensures your products are
              delivered fast.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ High-quality products
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              We partner with the world&apos;s leading brands to ensure the best
              quality products.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ Endless creativity with Shutterstock Images
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              Access millions of images and graphics to create unique products
              you can sell in your store.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] tracking-wide mt-5 font-Georama font-medium">
              ▻ 1-click integration to the leading ecommerce platforms
            </h4>
            <p className="font-Georama text-base text-[#363636] mt-2">
              Connect your store to Gelato using{" "}
              <span className="underline cursor-pointer hover:text-[#b4b4b4] text-[#8d8d8d]">
                our integrations
              </span>
              with{" "}
              <span className="underline cursor-pointer hover:text-[#b4b4b4] text-[#8d8d8d]">
                Shopify
              </span>
              ,{" "}
              <span className="underline cursor-pointer hover:text-[#b4b4b4] text-[#8d8d8d]">
                Etsy
              </span>
              and more. .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGelato;
