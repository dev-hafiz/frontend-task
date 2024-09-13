/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { Button } from "@/components/ui/button";
import banner from "../../../assets/images/download.webp";
import shopify from "../../../assets/images/shopify.svg";

const Hero = () => {
  return (
    <div className="md:mt-0 mt-40">
      <div class="mx-auto h-full px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 md:py-7 lg:max-w-screen-xl lg:px-6">
        <div class="flex flex-col items-center justify-between lg:flex-row">
          <div className="p-4">
            <div class="lg:max-w-xl ">
              <h2 className="font-Georama -mt-24 text-2xl lg:text-6xl	font-medium">
                Print on demand for your ecommerce business
              </h2>
              <h4 className="font-Georama text-2xl font-medium mt-8 mb-3">
                Sign up for free and only pay for what you sell
              </h4>
              <p className="font-Georama text-base text-[#2f2f2f] tracking-wide	 mb-10">
                Turn your passion into profit with the world's largest{" "}
                <span className="underline">print on demand</span> network.
              </p>
            </div>
            <div className="flex  gap-4">
              <Button className="rounded-full ">Get start for free</Button>
              <Button variant="outline" className="rounded-full ">
                See ours products
              </Button>
            </div>
          </div>
          <div class="relative  lg:w-3/6">
            <img src={banner} alt="Banner" />
          </div>
        </div>
        <div className="-mt-28 pl-5 ">
          <img src={shopify} className="w-[171px] h-[99px]" alt="ratings" />
          <div className="flex items-center -mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#46B99E]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#46B99E]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#46B99E]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#46B99E]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#46B99E]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-Georama relative text-base  hover:text-[#9D9E9D]  text-[#353535] opacity-70 ml-3">
              4.8/5
              <span className="-left-32 top-2  absolute">
                <br /> based on 887 reviews
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
