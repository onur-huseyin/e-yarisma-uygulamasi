<template>
  <header class=" h-24 border-b-[1px] z-20  border-gray-300 ">
     <nav  class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
       <div class="flex lg:flex-1">
         <NuxtLink to="/" class="-m-1.5 p-1.5 z-50">
           <span class="sr-only">Your Company</span>
           <img class="h-10 w-auto" src="/assets/images/asil-logo.png" alt="" />
         </NuxtLink>
       </div>
       <div class="flex lg:hidden"> 
         <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
           <span class="sr-only">Open main menu</span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-slate-800">
   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
 </svg>
 
 
         </button>
       </div>
       <PopoverGroup class="hidden lg:flex lg:gap-x-12 z-10">
         <Popover class="relative">
           <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-indigo-400 focus:marker:no-underline">
             Sistem
             <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
           </PopoverButton>
 
           <transition enter-active-class="transition ease-out duration-400" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
             <PopoverPanel class="absolute -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
               <div class="p-4">
                   <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100">
                     <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                       <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                     </div>
                     <div class="flex-auto">
                       <NuxtLink :href="item.href" class="block font-semibold text-gray-900">
                         {{ item.name }}
                         <span class="absolute inset-0"></span> <!-- Span etiketi kapatıldı -->
                       </NuxtLink>
                       <p class="mt-1 text-gray-600 text-xs">{{ item.description }}</p>
                     </div>
                   </div>
               </div>
             </PopoverPanel>
           </transition>
         </Popover>
 
         <NuxtLink to="/events" class="text-sm font-semibold leading-6 text-indigo-400 focus:no-underline">Etkinlikler</NuxtLink>
         <NuxtLink to="/winners" class="text-sm font-semibold leading-6 text-indigo-400">Sorgulama yap</NuxtLink>
       </PopoverGroup>
       <div class="hidden lg:flex lg:flex-1 lg:justify-end">
         <NuxtLink to="/login-form" class="text-sm font-semibold leading-6 bg-yellow-300 py-2 rounded-lg px-4 text-yellow-900">Giriş <span aria-hidden="true">&rarr;</span></NuxtLink>
       </div>
     </nav>
     
     <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
         
       <div class="fixed flex justify-center items-center inset-0 backdrop-blur-[3px] shadow-none" />
       <DialogPanel class="fixed dialog-css inset-y-0 right-0 z-50  w-3/4 overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
         <div class="flex items-center justify-between">
           <a href="#" class="-m-1.5 p-1.5">
             <span class="sr-only">Your Company</span>
             <img class="h-8" src="/assets/images/yellow-new.png" alt="cactus">
           </a>
           <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-100" @click="mobileMenuOpen = false">
             <span class="sr-only">Close menu</span>
             <XMarkIcon class="h-6 w-6" aria-hidden="true" />
           </button>
         </div>
         <div class="mt-16 flow-root">
           <div class="-my-6 ">
             <div class="space-y-2 py-6">
               <NuxtLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-300 hover:bg-gray-600">Ana Sayfa</NuxtLink>
               <NuxtLink to="/events" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-300 hover:bg-gray-600">Etkinlikler</NuxtLink>
               <NuxtLink to="/winners" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-300 hover:bg-gray-600">Sorgulama yap</NuxtLink>
             </div>
             <div class="flex items-center gap-4 py-4">
               <NuxtLink to="/gizlilik-politikasi" class="text-sm font-semibold text-[#EDE218]">Gizlilik K.V.K.K</NuxtLink>
               <NuxtLink to="/kosullar" class="text-sm font-semibold text-[#EDE218]">Koşullar</NuxtLink>
             </div>
            
             <ul class="py-4 flex justify-start gap-6 md:gap-8">
         <li>
           <a
             href="#"
             rel="noreferrer"
             target="_blank"
             class="text-[#EDE218] transition hover:text-yellow-500"
           >
             <span class="sr-only">Youtube</span>
             <svg class="w-6 h-6 fill-[#EDE218] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
   <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
 </svg>
 
           </a>
         </li>
   
         <li>
           <a
             href="#"
             rel="noreferrer"
             target="_blank"
             class="text-[#EDE218] transition hover:text-yellow-500"
           >
             <span class="sr-only">Instagram</span>
             <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path
                 fill-rule="evenodd"
                 d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                 clip-rule="evenodd"
               />
             </svg>
           </a>
         </li>
   
         <li>
           <a
             href="#"
             rel="noreferrer"
             target="_blank"
             class="text-[#EDE218] transition hover:text-yellow-500"
           >
             <span class="sr-only">Twitter</span>
             <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path
                 d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
               />
             </svg>
           </a>
         </li>
       </ul>
             <div class="py-6">
               <a href="#" class="-mx-3 bg-yellow-200  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-900 hover:bg-yellow-300 w-32 text-center">Giriş <span aria-hidden="true">&rarr;</span></a>
 
             </div>
             <NuxtLink to="/basvuru" class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-yellow-300 hover:bg-gray-600">Başvuru Yap</NuxtLink>
           </div>
         </div>
         <div class="absolute bottom-3 right-1  w-full flex items-center justify-center">
           <p class="text-sm text-center text-gray-400">© Copyright 2024 Tüm hakları saklıdır.</p>
         </div>
       </DialogPanel>
       
     </Dialog>
 
   </header>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
 import {
   Dialog,
   DialogPanel,
   Popover,
   PopoverButton,
   PopoverGroup,
   PopoverPanel,
 } from '@headlessui/vue'
 import {
   FlagIcon,
   FingerPrintIcon,
   ListBulletIcon,
   XMarkIcon,
   ShieldCheckIcon
 } from '@heroicons/vue/24/outline'
 import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
 
 const products = [
 { 
   name: 'Başvuru Yap',
   href: '/basvuru',
   icon: FlagIcon,
   description: 'Şimdi ücretsiz başvuru yap',
  },
   { 
   name: 'Koşullar',
   description: 'Katılım koşulları bilgilendirme',
   href: '/cactus-kosullar',
   icon: ListBulletIcon
   },
   { 
   name: 'Gizlilik',
   description: 'Gizlilik ve politikalar',
   href: '/gizlilik-politikasi',
   icon: ShieldCheckIcon },
 ]
 
 
 
 const mobileMenuOpen = ref(false);
 
 const isOpen = ref(false)
 
 function closeModal() {
   isOpen.value = false
 }
 function openModal() {
   isOpen.value = true
 }
 </script>