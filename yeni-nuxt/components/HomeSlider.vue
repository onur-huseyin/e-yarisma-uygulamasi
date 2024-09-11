<template>
<div>
    <div class="home-slider px-5 z-0 md:px-0 container mx-auto relative -top-24 lg:-top-32">
        <p class="pl-5 pb-5 text-cyan-100 font-bold">Kaydır →</p>
    <swiper @slideChange="onSlideChange">
      <swiper-slide>
        <img style="border-radius: 20px !important;" src="assets/images/mobilapp512.jpg" alt="Slide image" class="slide-image object-cover w-full rounded-xl lg:h-[32rem]" />
      </swiper-slide>
      <swiper-slide>
        <img style="border-radius: 20px !important;" src="assets/images/cactusai.jpg" alt="Slide image" class="slide-image object-cover w-full rounded-xl lg:h-[32rem]" />
      </swiper-slide>
    </swiper>
  </div>
</div>
  </template>
  


  <script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';



  
  function onSlideChange() {
    console.log('slide changed');
  }
  </script>
  <style>
/* Style for navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  color: #000; /* Set the color of the arrows */
}

.swiper-button-next {
  right: -10px; /* Adjust position as needed */
}

.swiper-button-prev {
  left: -10px; /* Adjust position as needed */
}
</style>
  




