<template>
  <div
    class="shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-xl"
  >
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
          :src="meal.strMealThumb" 
          :alt="meal.strMeal" 
          class="rounded-t-xl h-48 w-full object-cover"
        >
      </router-link>
      <div class="p-3">  
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
        <div class="flex items-center">
          <YoutubeButton :href="meal.strYoutube">
            YouTube
          </YoutubeButton>
        </div>
      </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';
import { defineProps } from 'vue';
const {meal} = defineProps({
  meal: {
    require: true,
    type: Object
  }
})
</script>