<template>
  <div class="p-8 pb-0">
    <h1 class="text-5xl font-semibold mb-5 max-sm:text-3xl text-orange-400">Search By Name</h1>
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full text-black"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
