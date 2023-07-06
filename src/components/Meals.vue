<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.id" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-white">
    There are no meals
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import MealItem from '../components/MealItem.vue'

const {meals} = defineProps({
  meals: {
    require: true,
    type: Object,
  }
})
</script>