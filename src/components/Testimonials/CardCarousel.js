'use client'

import { testimonialData } from "@/data/TestimonialData";
import TestimonialCard from "./TestimonialCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";

import '@/styles/TestimonialCardCarousel.css'

function TestimonialCardCarousal() {
  return (
   <div>
      <Swiper
         modules={[EffectCoverflow, Pagination, Mousewheel]}
         loop={true}
         grabCursor
         centeredSlides
         speed={900}
         initialSlide={2}
         spaceBetween={-500}
         slidesPerView="auto"
         effect="coverflow"
         coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false
         }}
         pagination={{
            clickable: true,
         }}
         mousewheel={{
            thresholdDelta: 50,
            sensitivity: 1,
         }}
      >
         {
            testimonialData.map((testimony) => {
               return (    
                  <SwiperSlide 
                  key={testimony.id}
                  >
                     <TestimonialCard
                        image={testimony.img}
                        testimonial={testimony.testimonial}
                        name={testimony.name}
                        designation={testimony.designation}
                        
                     />
                  </SwiperSlide>
               );
            })
         } 
      </Swiper>
   </div>
  );
}

export default TestimonialCardCarousal;
