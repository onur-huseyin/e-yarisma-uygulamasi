<template>
  <Header2/>
<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div class="absolute inset-x-0  -z-20 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa880] to-[#ffd412] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
  <h2 class=" text-center text-2xl pb-6 font-bold leading-9 tracking-tight text-gray-900">Ücretsiz katıl!</h2>
    <div class=" sm:mx-auto sm:w-full sm:max-w-sm  bg-gray-100 px-8 py-4 rounded-lg">
      
      <form @submit.prevent="submitData" class="space-y-6"  method="POST">
        <div class="flex items-center justify-center">
  <div class="rounded-lg px-4 flex items-center gap-2 mt-4 bg-green-200 p-2">
      <div class="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 stroke-green-600 fill-green-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
      </div>

    <p class=" text-center font-semibold text-sm text-green-600">Kolay ve güvenilir hizmet!</p>
  </div>
      </div>
          <div>
            <div class="text-sm">
              <button type="button" @click="openModal" class="font-semibold text-red-600 flex items-center justify-start gap-x-1">Bilgi
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-red-600 fill-red-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </button>
            </div>
        </div>
        <div>
          <label for="answerEMail" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
          <div class="mt-2">
            <input placeholder="örnek@gmail.com" type="text" v-model="postObject.answerEMail" id="answerEMail" required  class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-none sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="answerName" class="block text-sm font-medium leading-6 text-gray-900">Adınız</label>
          <div class="mt-2">
            <input type="text" v-model="postObject.answerName" id="answerName" required  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="answerSurName" class="block text-sm font-medium leading-6 text-gray-900">Soyadınız</label>
          <div class="mt-2">
            <input type="text" v-model="postObject.answerSurName" id="answerSurName" required  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="ticketId" class="block text-sm font-medium leading-6 text-gray-900">Seri Numarası</label>
          <div class="mt-2">
            <input type="text" v-model="postObject.ticketId" id="ticketId" required   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6" />
           
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="answerTelephone" class="block text-sm font-medium leading-6 text-gray-900">Telefon Numarası</label>
          </div>
          <div class="mt-2">
            <input placeholder="(555) XXX-XXXX" ref="phoneInput" @input="handleInput" type="text" v-model="postObject.answerTelephone" id="answerTelephone" required  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-700 bg-yellow-200 shadow-sm hover:bg-yellow-200 focus-visible:none  "><span v-if="!loading">Kodu Gönder <span aria-hidden="true">&rarr;</span></span>
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
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >

              <div class="mt-2">
                <div class="flex items-center gap-x-1">
                  <p class="font-semibold text-red-500">Bilgi</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-red-600 fill-red-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                </div>
                <p class="text-sm text-gray-500 pt-2">
                  Size ait olan seri numaranız ile e-yarışma sonunda başarı sıranızı sorgulayabilirsiniz.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Teşekkürler!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FEDE35] to-[#ccaa00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
  <Footer/>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import api from '@/server/api/api';
import type { ApiResponse } from '@/server/api/api';
import { useRouter } from 'vue-router';
const route = useRoute();
const queryParam = route.query.ticketId as string; 

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
const phoneNumber = ref('');
const phoneInput = ref<HTMLInputElement | null>(null);

const formatPhoneNumber = (input: string): string => {
  input = input.replace(/\D/g, '');

  if (input.length > 10) {
    input = input.substring(0, 10);
  }

  if (input.length > 6) {
    return `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6)}`;
  } else if (input.length > 3) {
    return `(${input.substring(0, 3)}) ${input.substring(3)}`;
  } else if (input.length > 0) {
    return `(${input}`;
  } else {
    return '';
  }
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  phoneNumber.value = target.value.replace(/\D/g, '');
  if (phoneInput.value) {
    phoneInput.value.value = formatPhoneNumber(phoneNumber.value);
  }
};

const isValidPhoneNumber = computed(() => {
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(phoneNumber.value);
});
const postObject = ref({
  ticketId: '',
  answer: '',
  answerName: '',
  answerSurName: '',
  answerTelephone: '',
  answerEMail: '',
  verificationCode: ''
});

onMounted(() => {
    localStorage.clear();
    postObject.value.ticketId = queryParam;
});

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

//devam işlemi
const toast = useToast();
const loading = ref(false)
const router = useRouter();

const submitData = async () => {
  try {
    loading.value = true; // Loader'ı göster
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = ref<ApiResponse | null>(null);
    response.value = await api.postData('Answers',postObject.value)
    if(response.value.status == 200)
    {
      localStorage.setItem("ticketId",postObject.value.ticketId);
      localStorage.setItem("answerName",postObject.value.answerName);
      localStorage.setItem("answerSurName",postObject.value.answerSurName);
      localStorage.setItem("answerTelephone",postObject.value.answerTelephone); 
      localStorage.setItem("answerEMail",postObject.value.answerEMail);
      router.push({ path: '/login-form-2'});
    }else if(response.value.status == 400)
    {
      toast.error(response.value.value.message);
    }else{
      toast.error("Bir hata oluştu");

    }
      
    // Ticket ID'yi kontrol et

  } catch (error: any) {    
        toast.error("Bir hata oluştu");

  }finally {
    loading.value = false; // Loader'ı gizle
  }
};


</script>