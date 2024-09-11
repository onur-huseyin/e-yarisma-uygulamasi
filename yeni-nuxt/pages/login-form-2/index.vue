<template>
<Header2/>
<div class="relative flex py-24 flex-col justify-center overflow-hidden bg-gray-50 ">
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-lg gap-4  mx-auto w-full max-w-md rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col gap-y-4">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Doğrulama Kodu</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>Sms olarak gelen 6 haneli kodu giriniz. </p>
        </div>
      </div>

      <div>
        <form @submit.prevent="submitVerification" method="patch">
          <div class="flex flex-col gap-y-6">
            <input class="w-full border-none bg-gray-200 p-2 max-w-[242px] mx-auto rounded-lg" type="text" v-model="verificationCode" id="verificationCode" required>

            <div class="flex flex-col">
              <div class="w-full flex justify-center">
                <button type="submit" class="flex px-12 flex-row items-center hover:bg-green-200 justify-center text-center border rounded-xl outline-none py-3 bg-green-300 border-none text-green-700 font-semibold text-sm shadow-sm">
                  <span v-if="!loading">Kodu Onayla</span>
                  <span class="flex items-center justify-center gap-x-4" v-if="loading">
                    <p class="text-green-500">Kontrol ediliyor</p>
                    <svg aria-hidden="true" class="w-6 animate-spin h-6 text-green-400  fill-green-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
              </span>
                </button>

              </div>

              <div class="flex flex-row mt-4 items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p >Kod gelmedi mi?</p> <button type="button" :disabled="isButtonDisabled" @click="newVerificationCode()" class="flex flex-row items-center text-red-500 font-semibold">{{ secondText }}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer/>
</template>


<script lang="ts" setup>
import { ref, onMounted,onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/server/api/api';
import type { ApiResponse } from '@/server/api/api';
import { useToast } from 'vue-toastification'
const router = useRouter();
onMounted(() => {
  // Route query'den ticketId'yi al
  if(localStorage.getItem("ticketId") == null)
  router.push({ path: '/login-form'});
  startCountdown();
});
const verificationCode = ref('');
const loading = ref(false)
const toast = useToast();

const totalSeconds = 120; // Toplam süre
const seconds = ref(totalSeconds); // Geri sayan süre
const secondText = ref('')
const isButtonDisabled = ref(true); // Butonun başlangıçta devre dışı olması

const startCountdown = () => {
  const intervalId = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--;
      secondText.value = 'Yeni kod almak için '+seconds.value + ' saniye';
    } else {
      clearInterval(intervalId);
      isButtonDisabled.value = false; // Süre bittiğinde butonu etkinleştir
      secondText.value = "Tekrar Gönder";
    }
  }, 1000);

  // Temizleme işlemi
  onUnmounted(() => clearInterval(intervalId));
};


const submitVerification = async (): Promise<void> => {
  try {
    loading.value = true; // Loader'ı göster
    // Doğrulama kodunu ve ticketId'yi API'ye gönder
    const response = ref<ApiResponse | null>(null);
    response.value = await api.patchData('verification',{
      ticketId: localStorage.getItem("ticketId"),
      verificationCode: verificationCode.value
    });
    
    if(response.value.status == 200)
    {
      localStorage.setItem("verificationCode",verificationCode.value);
      router.push({ path: '/last-login'});
    }else if(response.value.status == 400)
    {
      toast.error(response.value.value.message);

    }else{
      toast.error("Bir hata oluştu");
    }
    
    // Başarı durumunda yönlendirme yap
  } catch (error: any) {
    // Hata mesajını kullanıcıya gösterme ve konsola basma
    toast.error("Bir hata oluştu");
  }finally {
    loading.value = false; // Loader'ı gizle
  }
};

const newVerificationCode = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = ref<ApiResponse | null>(null);
    response.value = await api.postData('Answers',{
      ticketId: localStorage.getItem("ticketId"),
      answerName: localStorage.getItem("answerName"),
      answerSurName: localStorage.getItem("answerSurName"),
      answerTelephone: localStorage.getItem("answerTelephone"),
      answerEMail: localStorage.getItem("answerEMail"),

    })
    if(response.value.status == 200)
    {

      toast.success("Kod başarıyla yeniden gönderildi");
    }else if(response.value.status == 400)
    {
      toast.error(response.value.value.message);
    }else{
      toast.error("Bir hata oluştu");

    }
      
    // Ticket ID'yi kontrol et

  } catch (error: any) {    
        toast.error("Bir hata oluştu");

  }
};


</script>


