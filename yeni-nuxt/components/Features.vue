<template>
    <div class="bg-white mt-10 lg:mt-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pb-10  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistem Mantığı</h2>
          <p class="mt-4 text-gray-500">Cactus noktalarında gerçekleşen etkinliklere katılarak,
            muhteşem ödüller kazanma fırsatını yakalayın!</p>
  
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
              <dt class="font-semibold text-indigo-700">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="assets/images/qr-code.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
          <img src="assets/images/prize.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
          <img src="assets/images/cupa.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
          <img src="assets/images/winner.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const features = [
    { name: 'Adil Sıralama', description: 'Ödülleri kazanmak için şansınıza değil, becerilerinize güvenin.Yapay zeka tarafından oluşturulan sıralama sistemi, herkes için adil bir yarışma ortamı sağlar.' },
    { name: 'Ödüller ve Fırsatlar', description: 'Katıldıkça kazandıran ödüller ve sürpriz fırsatlarla dolu etkinliklerle keyifli vakit geçirin.' },
    { name: 'QR kod ve seri nuraması', description: 'Her katılımcı için tek kullanımlık qr kodlar ve seri numaraları vardır.' },
    { name: 'Kazanmak', description: 'Cactus noktasında düzenlenen etkinlik tarihinde orada bulunun ve e-yarışmada sıralamaya girin!' },
  ]
  </script>