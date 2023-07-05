<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold mb-4">Ingredients</h1>
    <input 
      type="text" 
      class="rounded border-2 border-gray-200 w-full mb-3" 
      placeholder="Search for Ingredients"
      v-model="keyword"
      @change="searchMeals"
    >
    <router-link 
      :to="{
        name: 'byIngredients', 
        params: { ingredients: ingredient.strIngredient }
      }" 
      v-for="ingredient of computedIngredients" 
      :key="ingredient.idIngredient" 
      class="block rounded p-3 mb-5 shadow"
    >
      <h3 class="text-2xl font-bold">{{ingredient.strIngredient}}</h3>
      <p class="">{{ingredient.strDescription}}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([])
const keyword = ref('')
const computedIngredients = computed(() => {
  if(!computedIngredients) return ingredients
  return ingredients.value.filter(i => 
    (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase()) ||
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({data}) => {
      ingredients.value = data.meals
    })
})
</script> 