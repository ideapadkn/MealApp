<template>
  <a 
    :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border-2 border-transparent mr-5 bg-red-400 hover:bg-red-600 text-white transition-colors"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  href: String
})
</script>