<template>
    <Header2/>
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[140rem] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-20 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b8c225] to-[#fcff36] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <div class="flex  w-full justify-center my-6">
          <div class="bg-gray-100 rounded-3xl flex gap-4">
            <NuxtLink to="/basvuru" class=" rounded-3xl p-3 text-sm text-gray-400 font-semibold">Cactus Noktası</NuxtLink>
            <NuxtLink to="/basvuru-sponsor" class=" rounded-3xl p-3 bg-yellow-200 text-yellow-700 text-sm font-semibold">Sponsor</NuxtLink>
          </div>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ödüllere sponsor olun!</h2>
        <p class="mt-2 text-sm leading-8 text-gray-600">Başvurunuzun ardından ekibimiz sizinle iletişime geçmekten memnuniyet duyacaktır.</p>
      </div>
      <form @submit.prevent="submitData" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="isim" class="block text-sm font-semibold leading-6 text-gray-900">Yetkili Adı</label>
            <div class="mt-2.5">
              <input v-model="postObject.companyApplicationName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="soyisim" class="block text-sm font-semibold leading-6 text-gray-900">Yetkili Soyad</label>
            <div class="mt-2.5">
              <input v-model="postObject.companyApplicationSurnameName"  type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Şirketiniz</label>
            <div class="mt-2.5">
              <input v-model="postObject.companyApplicationCompanyName"  type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="adres" class="block text-sm font-semibold leading-6 text-gray-900">Adres</label>
            <div class="mt-2.5">
              <input v-model="postObject.companyApplicationCompanyAdress"  type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">E-mail</label>
            <div class="mt-2.5">
              <input v-model="postObject.companyApplicationEmail"  type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Telefon Numarası</label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-2 pr-0 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>TR</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input v-model="postObject.companyApplicationTelephoneNumber"  type="tel" name="phone-number" id="phone-number" placeholder="5XX XXX XX XX" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Mesajınız (opsiyonel)</label>
            <div class="mt-2.5">
              <textarea v-model="postObject.companyApplicationContent"  name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="agreed" :class="[agreed ? 'bg-green-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </div>
            <SwitchLabel class="text-sm leading-6 text-gray-600">
              Gizlilik politikalarını kabul ediyorum.
              {{ ' ' }}
              <NuxtLink to="/gizlilik-politikasi" class="font-semibold text-indigo-700">politikalar</NuxtLink>.
            </SwitchLabel>
          </SwitchGroup>
        </div>
        <div class="mt-10">
          <button type="submit" class="justify-center w-full flex rounded-md bg-yellow-200 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-700 transition-all shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><span v-if="!loading">Başvuru Yap</span>
            <span v-if="loading">
            <svg aria-hidden="true" class="w-6 animate-spin h-6 text-gray-200  fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          </span>
          </button>              
        </div>
      </form>
    </div>
    <Footer/>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import api from '@/server/api/api';
  import type { ApiResponse } from '@/server/api/api';
  import { useToast } from 'vue-toastification'
  const toast = useToast();
  const agreed = ref(false)
  const loading = ref(false)
  const postObject = ref({
  companyApplicationName: '',
  companyApplicationSurnameName: '',
  companyApplicationCompanyName: '',
  companyApplicationCompanyAdress: '',
  companyApplicationEmail: '',
  companyApplicationTelephoneNumber: '',
  companyApplicationContent: '',
  companyApplicationType : 2
});

const submitData = async () => {
  try {
    loading.value = true;
    const response = ref<ApiResponse | null>(null);
    response.value = await api.postData('CompanyApplication',postObject.value)
    if(response.value.status == 200)
    {
      toast.success("Başvurunuz başarıyla iletildi");
    }else if(response.value.status == 400)
    {
      toast.error(response.value.value.message);
    }else{
      toast.error("Bir hata oluştu");

    }
    // Ticket ID'yi kontrol et

  } catch (error: any) {    
    toast.error("Bir hata oluştu");
  } finally{
    loading.value = false;
  }
};
  </script>