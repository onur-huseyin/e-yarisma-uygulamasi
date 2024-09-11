<template>
  <Header2/>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 pt-32 py-24 lg:px-8">
    <div class="absolute inset-x-0 -z-20 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa880] to-[#ffd412] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <h2 class="text-center text-2xl pb-6 font-bold leading-9 tracking-tight text-gray-900">Büyük ödüller için son adım!</h2>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 px-8 py-4 rounded-lg">
      <form @submit.prevent="submitVerification" class="space-y-6">
        <div class="flex items-center justify-center">
          <div class="rounded-lg px-4 flex items-center gap-2 mt-4 bg-green-200 p-2">
            <div class="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p class="text-center text-green-600 font-semibold text-sm">Kolay ve güvenilir hizmet!</p>
          </div>
        </div>
        <div>
          <label for="answer" class="block text-sm font-medium leading-6 text-gray-900">Cevabınız</label>
          <div class="mt-2">
            <input v-model="answer" id="answer" name="answer" type="text" autocomplete="answer" class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button :disabled="!agreed" @click="handleButtonClick" :class="['mt-4 px-4 py-2 font-semibold rounded-md', agreed ? 'bg-yellow-300 text-yellow-700' : 'bg-yellow-100 text-yellow-300']" type="submit" class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:none"><span v-if="!loading">Onayla <span aria-hidden="true">&rarr;</span></span>
            <span v-if="loading">
            <svg aria-hidden="true" class="w-6 animate-spin h-6 text-gray-200  fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          </span>
          </button>
        </div>
      </form>
      <div class="pt-6 flex items-center justify-between">
        <div>
          <p class="text-xs">Cactus'un kişisel bilgilerinizi KVKK gizlilik politikasına uygun şekilde işlemesini kabul edersiniz.</p>
        </div>
        <Switch v-model="agreed" :class="agreed ? 'bg-teal-600' : 'bg-teal-300'" class="relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75">
          <span class="sr-only">Use setting</span>
          <span aria-hidden="true" :class="agreed ? 'translate-x-4' : 'translate-x-0'" class="pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
        </Switch>
      </div>
      <div class="text-xs pt-4">Gizlilik KVKK kanunu ile ilgili detaylara <NuxtLink to="/gizlilik-politikasi" class="text-indigo-600 font-bold" >buradan</NuxtLink> ulaşabilirsiniz.</div>
    </div>
  </div>
  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FEDE35] to-[#ccaa00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
  </div>

  <Footer/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import api from '@/server/api/api';
import type { ApiResponse } from '@/server/api/api';
import { Switch } from '@headlessui/vue'
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification'
const toast = useToast();
const router = useRouter();
const agreed =ref(false)
const loading = ref(false)
const handleButtonClick = () => {
  if(agreed.value){
    submitVerification();
  }else{
    toast.error("Politikaları kabul etmelisiniz")
  }
}
onMounted(() => {
  // Route query'den ticketId'yi al
  if(localStorage.getItem("ticketId") == null)
  router.push({ path: '/login-form'});
});
  const answer = ref('');

async function submitVerification() {
  try {
    loading.value = true;
    // First, patch the information from /login-form-2
    const response = ref<ApiResponse | null>(null);
      response.value = await api.patchData('answers',{
      ticketId: localStorage.getItem("ticketId"),
      answer: answer.value,
      answerName: localStorage.getItem("answerName"),
      answerSurName: localStorage.getItem("answerSurName"),
      answerTelephone: localStorage.getItem("answerTelephone"),
      answerEMail: localStorage.getItem("answerEMail"),
      verificationCode: localStorage.getItem("verificationCode"),
    });

    if(response.value.status == 200)
    {
      localStorage.clear();
      router.push('/sucsesfull');

    }else if(response.value.status == 400)
    {
      toast.error(response.value.value.message);
    }else{
      toast.error("Bir hata oluştu");


    }

  } catch (error) {
    toast.error("Bir hata oluştu");
  }finally{
    loading.value = false;
  }
}


</script>
