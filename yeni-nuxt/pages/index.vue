<template>
   <Header/>
    <div class="bg-[#373737] ">
     
  <div class="relative isolate px-6 pt-0 lg:px-8 py-12">
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
      <div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa880] to-[#ffd412] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-3xl py-12 sm:py-48 lg:py-24">
        <div class="mb-8 flex justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300  ring-1 ring-gray-300/10 hover:ring-gray-300/20">
            © Cactus tarafından oluşturuldu. <NuxtLink to="/cactus-kosullar" class="font-semibold text-indigo-200"><span class="absolute inset-0" aria-hidden="true" />Lisans <span aria-hidden="true">&rarr;</span></NuxtLink>
          </div>
        </div>
        <div class="text-center">
          <div class="flex-col flex md:flex-row items-center gap-y-5 justify-center">
            <img class="w-56" src="/assets/images/home-win.svg" alt="">
            <h1 class="text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Bitmeyen ödüller, <br>Cactus noktalarında!</h1>
          </div>
          <p class="mt-6 text-sm lg:text-lg text-yellow-400">İlk ve tek e-yarışma uygulaması Cactus ile sen de özgürce kazanmaya  başla!</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/login-form" class="rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-yellow-900 shadow-sm hover:bg-yellow-500 transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Giriş Yap →</NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FEDE35] to-[#ccaa00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
</div>
<HomeSlider/>
<Adimlar/>
<Referances/>
<Nedir/>
<Features/>
<Sss/>
<Footer/>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
