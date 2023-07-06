<template>
  <div class="flex flex-col p-8 items-center justify-center">
    <div class="w-full">    
      <h1 class="text-5xl font-semibold mb-5">Recomedations For You</h1>
      <div class="flex justify-between items-center">
        <div
          v-for="meal of computedMeals"
          :key="meal.id"
          class="shadow-lg"
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
            <p class="mb-4">{{ meal.strTags }}</p>
            <div class="flex items-center">
              <YoutubeButton :href="meal.strYoutube">
                YouTube
              </YoutubeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import axiosClient from '../axiosClient';
  import YoutubeButton from '../components/YoutubeButton.vue'

  const meals = ref([])
  const keyword = ref('')

  const computedMeals = computed(() => {
  if(!computedMeals) return meals
    return meals.value.filter(i => 
      i.strMeal.toLowerCase().includes(keyword.value.toLowerCase())
    )
  })

  onMounted(() => {
    axiosClient.get('random.php')
      .then(({data}) => {
        meals.value = data.meals
    })
  })
</script>