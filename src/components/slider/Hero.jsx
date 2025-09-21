import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100svh-64px)]">
      <div className="min-h-[calc(100svh-64px)] flex items-center justify-center">
        <div className="h-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/3 grow flex flex-col items-center md:items-start">
            <div className="w-full md:max-w-lg flex flex-col md:flex-row items-center md:gap-4 my-4 bg-red-600 p-4 rounded">
              <h2 className="text-3xl font-semibold text-white">বিশাল অফার</h2>
              <div className="hidden md:block text-lg md:text-3xl font-semibold text-white">
                -
              </div>
              <div className="flex items-center gap-2">
                <p className="flex items-center text-4xl lg:text-5xl font-semibold text-white">
                  999
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-3xl md:text-4xl mt-1.5"
                  />
                </p>
                <p className="text-2xl font-semibold text-white">/</p>
                <p className="text-2xl font-semibold text-gray-200 line-through">
                  1299
                  <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                </p>
              </div>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ lineHeight: "1.4" }}
            >
              আর নয় চুল পড়ে যাওয়ার ভয় — ফিরিয়ে আনুন ঘন ও প্রাণবন্ত চুল!
            </h1>
            <p className="mb-8">
              হেয়ার গ্রোথ স্প্রে নিয়মিত ব্যবহারে চুল পড়া বন্ধ করে, নতুন চুল
              গজাতে সহায়তা করে এবং চুলের গোড়া মজবুত করে তোলে। সঙ্গে থাকছে ডার্মা
              রোলারের কার্যকরী সাপোর্ট — যার প্রমাণ মিলেছে অসংখ্য সন্তুষ্ট
              গ্রাহকের ফিডব্যাকে।
            </p>
            <a
              href="#order-now"
              className="btn primary inline-block heartbeat shadow-md"
            >
              এখনই অর্ডার করুন
            </a>
          </div>
          <div className="md:w-1/3 grow mt-8 md:mt-0 relative">
            <img
              src="/assets/images/product.png"
              alt="প্রোডাক্ট ছবি"
              className="w-full h-auto object-contain"
            />

            <div className="space-y-0 md:space-y-2 absolute max-w-[100px] md:max-w-[200px] top-[25%] md:top-40 right-10 md:right-16 w-full flex flex-col items-center px-4">
              <div>
                <h1 className="text-lg md:text-4xl font-bold line-through text-gray-200">
                  1299
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-lg mt-1.5"
                  />
                </h1>
              </div>
              <div className="h-[1px] w-full bg-white"></div>
              <div>
                <h1 className="flex items-center text-2xl md:text-4xl lg:text-5xl font-bold text-white animate-pulse-scale">
                  999
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-2xl mt-1.5"
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
