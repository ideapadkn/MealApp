<template>
  <div class="flex flex-col p-8 items-center justify-center">
    <div class="w-full">
      <!-- <input type="text" class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for Meals"
      > -->
    </div>

    
    
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import store from '../store'
  import axiosClient from '../axiosClient.js'

  const ingredients = ref([])

  onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
  })
</script>