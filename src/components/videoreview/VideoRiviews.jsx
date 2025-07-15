import React from "react";
import videoreviews from "../../utils/videoreviews";
import Container from "../shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const VideoReviews = () => {
  return (
    <Container className="bg-primary/10 w-full mt-8 md:mt-16 py-5 md:py-10 rounded-md">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            দেখুন গ্রাহকরা কি বলছেন
          </h1>
          <div className="flex items-center gap-1">
            <div className="w-20 h-1 bg-primary"></div>
            <div className="w-10 h-1 bg-primary"></div>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 md:mt-10 md:px-14">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videoreviews?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[500px] rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <video
                  src={item.videoSrc}
                  controls
                  className="w-full h-full object-cover aspect-video"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          className="custom-swiper-prev flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-12 h-12 bg-primary/50 text-white rounded-full shadow-md hover:bg-primary"
          aria-label="Previous"
        >
          <ArrowLeft2 color="currentColor" className="text-white size-7" />
        </button>
        <button
          className="custom-swiper-next flex items-center justify-center absolute top-1/2 -right-0 transform -translate-y-1/2 z-10 w-12 h-12 bg-primary/50 text-white rounded-full shadow-md hover:bg-primary"
          aria-label="Next"
        >
          <ArrowRight2 color="currentColor" className="text-white size-7" />
        </button>
      </div>
    </Container>
  );
};

export default VideoReviews;
