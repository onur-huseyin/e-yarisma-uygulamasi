<template>
  <div class="otp w-full flex justify-center gap-4" @input="handleOtpInput">
    <template v-for="(field, index) in fields" :key="index">
      <input
        v-model="data[index]"
        ref="firstInputEl"
        type="text"
        maxlength="1"
        class="border border-gray-300 rounded w-10 h-10 text-center"
        @paste="index === 0 && handlePaste($event)"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';

// Define component props with TypeScript
const props = defineProps<{
  fields: number;
}>();

// Reactive state for the input values
const data = ref<string[]>(Array(props.fields).fill(''));
const anotherData = ref<string[]>(Array(props.fields).fill('')); // İkinci veri kaynağı
const firstInputEl = ref<HTMLInputElement[]>([]); // Updated to hold multiple elements
const emit = defineEmits<{
  (event: 'update:modelValue', value: number | null): void;
}>();

// Computed property to combine data and anotherData
const combinedValue = computed<string>({
  get() {
    return data.value.join('') + anotherData.value.join('');
  },
  set(newValue: string) {
    const newData = newValue.slice(0, props.fields);
    const newAnotherData = newValue.slice(props.fields);
    data.value = Array.from(newData);
    anotherData.value = Array.from(newAnotherData);
  }
});

// Watch combinedValue for changes
watch(
  combinedValue,
  (newVal) => {
    if (
      newVal !== '' &&
      newVal.length === props.fields * 2 &&
      !newVal.includes('')
    ) {
      emit('update:modelValue', Number(newVal));
    } else {
      emit('update:modelValue', null);
    }
  }
);

// Handle input focus management
const handleOtpInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.value && target.nextElementSibling) {
    (target.nextElementSibling as HTMLInputElement).focus();
  } else if (target.value === '' && target.previousElementSibling) {
    (target.previousElementSibling as HTMLInputElement).focus();
  }
};

// Handle paste event to fill inputs
const handlePaste = (e: ClipboardEvent) => {
  const clipboardData = e.clipboardData;
  if (clipboardData) {
    const pasteData = clipboardData.getData('text');
    let nextEl = firstInputEl.value[0];
    for (let i = 0; i < pasteData.length; i++) {
      if (nextEl) {
        data.value[i] = pasteData[i];
        nextEl = nextEl.nextElementSibling as HTMLInputElement;
      }
    }
  }
};
</script>
