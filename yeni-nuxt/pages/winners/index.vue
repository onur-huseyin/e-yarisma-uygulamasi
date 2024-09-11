<template>
    <Header2/>
    <div class="container px-4 lg:px-20 mx-auto pt-6">
      <div v-if="!loading && !result && (errorMessage)" class=" w-full flex justify-center">
        <div class="flex justify-center bg-red-200 p-4 rounded-lg items-center gap-x-2">
          <span class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 stroke-red-600 fill-red-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                </span>
                  <p class="text-red-600 font-semibold">Üzgünüm: {{ errorMessage }}</p>
        </div>
      </div>
        <div v-if="!loading && result"  class="flex items-center justify-evenly w-full py-5">
            <div class="flex items-center gap-2">
            </div>
            <div class="flex justify-center w-full ">
              <div class="bg-green-300 p-5 rounded-lg flex flex-col items-center gap-y-2">
                <svg class="w-10 h-10 text-green-800 fill-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
                </svg>
                <p class="text-green-700 font-semibold" v-if="branchName">
                Şube adı: {{ branchName }}
                </p>
                <p class="text-green-600 font-semibold text-xs" v-if="raffleEndTime">
                  Açıklanma Tarihi: {{ raffleEndTime }}
              </p>
              <p class="text-green-700 font-semibold text-xl" v-if="serialSorting !== null">Başarı sıranız: {{ serialSorting }}.</p>
              </div>
            </div>
        </div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8">
    <div class="absolute inset-x-0  -z-20 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa880] to-[#ffd412] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="w-full flex items-center gap-x-2 justify-center pb-4">
          <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">Kazandığını sorgula</h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 fill-green-400 stroke-green-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
        </div>

      <div class=" sm:mx-auto sm:w-full sm:max-w-sm  bg-gray-100 px-8 py-4 rounded-lg">
        
        <form @submit="handleSubmit" class="space-y-6" method="GET">
          <div class="flex items-center justify-center">
    <div class="rounded-lg px-4 flex items-center gap-2 mt-4 bg-green-200 p-2">
        <div class="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 stroke-green-600 fill-none">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
        </div>
        
      <p class=" text-center text-green-600 font-semibold text-sm">Kolay ve güvenilir hizmet!</p>
    </div>
  </div>
          <div>
            <label for="seri-number" class="block text-sm font-medium leading-6 text-gray-700">Seri numarası</label>
            <div class="mt-2">
              <input v-model="serialNumber" placeholder="Seri numarasını girin"  class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-10 placeholder:text-gray-400 focus:none focus:none focus:none sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <button @click="fetchData" :disabled="loading"  class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-800 bg-yellow-200 shadow-sm hover:bg-yellow-200 focus-visible:none  "><span v-if="!loading">Sorgula <span aria-hidden="true">&rarr;</span></span>
              <span class="flex items-center justify-center gap-x-4" v-if="loading">
            <p class="text-yellow-500">Kontrol ediliyor</p>
            <svg aria-hidden="true" class="w-6 animate-spin h-6 text-yellow-400  fill-yellow-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </span>
            </button>
          </div>
        </form>
        <div class="text-xs pt-4">Gizlilik KVKK kanunu ile ilgili detaylara <NuxtLink to="/gizlilik-politikasi"  class="text-indigo-600 font-bold">buradan</NuxtLink> ulaşabilirsiniz.</div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FEDE35] to-[#ccaa00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>

    <p class="py-10 text-gray-400 font-semibold">Ödüller ve kazananlar işletmeden ve bu sayfadan yayınlanmaktadır. E-yarışma sonu(saati) orada bulunmanız gerekmektedir, aksi takdirde ödül yedek kazanana teslim edilir.</p>
    </div>
    <Newsteller/>
    <Footer/>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { getData } from '@/plugins/cactus-api';
  import type { ApiResponse } from '@/plugins/cactus-api';
  
  // Reaktif değişkenler tanımlama
  const serialNumber = ref<string>(''); // Kullanıcıdan alınacak seri numarası
  const branchName = ref<string | null>(null); // branchName'ı saklamak için
  const raffleStartTime = ref<string | null>(null); // Başarı mesajı
  const raffleEndTime = ref<string | null>(null); // Hata mesajı
  const serialStatus = ref<string | null>(null); // API'den gelen message'ı saklamak için
  const serialSorting = ref<null>(null); // raffleEndTime'ı saklamak için
  const errorMessage = ref<string | null>(null);

  const loading = ref<boolean>(false); // Yükleme durumu
  const result = ref<boolean>(false); // Yükleme durumu
  
  const fetchData = async (): Promise<void> => {
    try {
  
      loading.value = true; // Yükleme başladığında

        // 2 saniye (2000 ms) bekletme
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = ref<ApiResponse | null>(null);
        response.value = await getData(`serials?serialnumber=${serialNumber.value}`)

        if(response.value.status == 200)
    {
            branchName.value = response.value.value.branchName;
            raffleEndTime.value = response.value.value.raffleEndTime;
            serialSorting.value = response.value.value.serialSorting;
            raffleStartTime.value = response.value.value.raffleStartTime;
            serialStatus.value = response.value.value.serialStatus;
            result.value = true;
    }else if(response.value.status == 400)
    {
      errorMessage.value = response.value.value.message;
    }else{
      errorMessage.value = "Bir hata oluştu";
    }
 }catch{
  errorMessage.value = "Bir hata oluştu";

 }finally{
  loading.value = false;
 }
};
// Form submit işlemi için fonksiyon
const handleSubmit = (event: Event): void => {
    event.preventDefault(); // Formun varsayılan submit davranışını engeller
    fetchData();
};
  </script>