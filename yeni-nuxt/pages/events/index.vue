<template>
        <Header2/>
    <div class="bg-white">
    <div class="mx-auto max-w-7xl ">
        <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#fffd80] to-[#b3ab14] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>
      <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#fffd80] to-[#b3ab14] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-xs  lg:text-sm leading-6 text-gray-900">
          <strong class="font-semibold">Cactus 2024</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>1431 Yeni katılımcı!
        </p>
      </div>
      <div class="flex flex-1 justify-end">
        <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
      <div class="relative isolate overflow-hidden bg-[#373737] px-6  shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="25" y="0" class="overflow-visible fill-gray-600">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#b3ab14" />
              <stop offset="1" stop-color="#b3ab14" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto w-full flex items-center justify-center flex-col text-center lg:mx-0 lg:flex-auto py-5 lg:py-32 lg:text-left">
          <h2 class="text-xl md:text-2xl lg:text-5xl text-center font-semibold tracking-tight text-gray-300 sm:text-4xl">Cactus noktalarında ki etkinlikler<br>  kazandırmaya devam ediyor!<br>  Sende yerini al..</h2>

        </div>

      </div>
    </div>
  </div>
  
  <div class="pb-40 container mx-auto bg-white">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 pl-4 py-5">Etkinlikler</h1>
    <p class="pl-5 pb-5 text-indigo-400 font-bold">Kaydır →</p>
    <swiper :slides-per-view="4" options="swiperOptions" :breakpoints="breakpoints" :space-between="0" swiper="onSwiper" slideChange="onSlideChange">
    <swiper-slide>
        <div class="flex flex-col justify-center items-center">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-100 p-4 bg-clip-border shadow-3xl shadow-shadow-500  w-full undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src="assets/images/desigram.png" class="mb-3 h-[150px] object-contain w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> Desigram Coffee Esenyurt </p>
                            <p class="font-semibold text-gray-500">27-28 Temmuz</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">İstanbul/Esenyurt </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Kapasite: <span>2500</span></p>
                        </div>
                        <a href="https://maps.app.goo.gl/iPsiBCmdQ23yjsfD8" target="_blank" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-sm text-indigo-600 font-bold transition duration-200 hover:bg-brand-800 active:bg-brand-700">Yol Tarifi</a>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="flex flex-col justify-center items-center">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-100 p-4 bg-clip-border shadow-3xl shadow-shadow-500  w-full undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src="assets/images/milly-1.png" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700">Milly Espresso Başakşehir </p>
                            <p class="font-semibold text-gray-500">3-4 Ağustos</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">İstanbul/Başakşehir </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Kapasite: <span>4500</span></p>
                        </div>
                        <a href="https://maps.app.goo.gl/aKFwdVu4wrhLUVrt5" target="_blank"class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-sm text-indigo-600 font-bold transition duration-200 hover:bg-brand-800 active:bg-brand-700">Yol Tarifi</a>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="flex flex-col justify-center items-center">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-100 p-4 bg-clip-border shadow-3xl shadow-shadow-500  w-full undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src="assets/images/espjpg.jpg" class="mb-3 h-[151px] object-contain w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> Espressolab Turkey </p>
                            <p class="font-semibold text-gray-500">Tarih: Belirlenmedi</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">İstanbul </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Kapasite: <span>7500</span></p>
                        </div>
                        <NuxtLink to="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-sm text-indigo-600 font-bold transition duration-200 hover:bg-brand-800 active:bg-brand-700">Yol Tarifi</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="flex flex-col justify-center items-center">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-100 p-4 bg-clip-border shadow-3xl shadow-shadow-500  w-full undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src="assets/images/mikel.jpeg" class="mb-3 h-[151px] object-cover rounded-xl w-full 3xl:h-full 3xl:w-full" alt="">
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> Mikel Turkey </p>
                            <p class="font-semibold text-gray-500">20-21 Ağustos</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">İstanbul/Ataköy </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Kapasite: <span>5000</span></p>
                        </div>
                        <NuxtLink to="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-sm text-indigo-600 font-bold transition duration-200 hover:bg-brand-800 active:bg-brand-700">Yol Tarifi</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="flex flex-col justify-center items-center">
            <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-100 p-4 bg-clip-border shadow-3xl shadow-shadow-500  w-full undefined">
                <div class="h-full w-full">
                    <div class="relative w-full">
                        <img src="assets/images/espjpg.jpg" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                        <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> Espressolab Turkey </p>
                            <p class="font-semibold text-gray-500">Tarih: Belirlenmedi</p>
                            <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">İstanbul </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Kapasite: <span>6500</span></p>
                        </div>
                        <NuxtLink to="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-sm text-indigo-600 font-bold transition duration-200 hover:bg-brand-800 active:bg-brand-700">Yol Tarifi</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
  </swiper>
  </div>
  <Veries/>
  <Footer/>

  </template>
  
  <script setup lang="ts">
  import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
  import { XMarkIcon } from '@heroicons/vue/20/solid'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';



  const breakpoints = {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };



  </script>
