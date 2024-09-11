<template>
    <div class="mx-auto container px-4 pb-12">
      <div class=" w-full rounded-2xl bg-white p-2">
        <h2 class="font-bold text-4xl py-5">Sıkça Sorulan Sorular</h2>
        <Disclosure as="div" class="mt-2" v-slot="{ open }" defaultOpen>
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>QR kodu nereden alacağım?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Cactus noktasında düzenlenen etkinlik(e-yarışma) zamanı kasadan edinebilirsiniz.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }" defaultOpen>
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Nasıl katılım sağlarım?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Etkinlik(e-yarışma) düzenlenen Cactus noktalarını takip ederek katılabilirsiniz. <NuxtLink class="text-blue-600 font-semibold" to="/events">Etkinlikler</NuxtLink>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Katılım ücretli mi?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Etkinliklere katılım ücretsizdir.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Cactus noktalarında ki kazananlar nereden açıklanıyor?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Sorgulama sayfasınadan seri numaranız ile birlikte sorgulama yapabilirsiniz.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Ödüller kazananalara nasıl ulaştıracaktır ?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Etkinliklerin sonunda kamuoyuna açık olarak teslim edilir. Katıldığınız Cactus noktasında bulunmanız önem arz etmektedir.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Seri numarası nedir ?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Etkinliğin düzenlendiği Cactus noktasından alabilirsiniz. Sisteme kayıt anahtarınızdır.
                        <u>"Seri numaraları çekiliş kodu gibi algılanmamalıdır"</u>.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Cactus noktalarında ki kazananlar nereden açıklanıyor?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Kazananlar sayfasında ve işletmeden duyuru yapılmaktadır.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm text-indigo-700 font-semibold hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
          >
            <span>Seri numarası olmadan katılabilir miyim ?</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-purple-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            Hayır, katılamazsınız. Etkinlikleri takip ediniz!
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </template>
  
  <script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'
  </script>
  