<template>
    <Header2/>
<div class="flex min-h-screen items-center justify-center bg-gray-100">
  <div class="rounded-lg bg-gray-50 px-16 py-14">
    <div class="flex justify-center">
      <div class="rounded-full bg-green-200 p-6">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
        <h3 class="my-4 text-center text-3xl font-semibold text-gray-700">Kayıt Başarılı!</h3>
    <p class=" text-center text-sm px-4 font-normal text-gray-600">Sisteme kaydınız oluşturulmuştur. Bizi tercih ettiğiniz için teşekkür ederiz!</p>
    <p class="py-2 text-red-400">{{ countdown }} saniye sonra anasayfaya yönlendirileceksiniz.</p>
    <NuxtLink to="/" class=" mt-6 rounded-lg bg-yellow-300 px-6 py-3 text-center font-semibold text-yellow-700">Ana Sayfa</NuxtLink>
    </div>
  </div>
</div>
<Footer/>
</template>
<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'nuxt/app';
const router = useRouter();
const countdown = ref(5); // Başlangıçta 5 saniye
onMounted(() => {
      setTimeout(() => {
        router.push('/');
      }, 6000); // 5 saniye sonra yönlendirme
          // Geri sayımı başlatan fonksiyon
    const startCountdown = () => {
      const interval = setInterval(() => {
        if (countdown.value > 0) {
          countdown.value -= 1;
        } else {
          clearInterval(interval);
          router.push('/');
        }
      }, 1000); // Her saniye güncelle
    };
    startCountdown();
    });

</script>