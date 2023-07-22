<template>
  <header
    class="navbar shadow-[0_0px_25px_rgba(0,0,0,0.25)] h-16 flex justify-between items-stretch"
  >
    <router-link
      to="/"
      class="inline-flex items-center h-full px-5 text-2xl text-orange-400"
    >
      Home
    </router-link>
    <div @click="toggleMenu" class="nav flex items-center gap-1">
      <div class="relative">
        <router-link
          :to="{ name: 'byName' }"
          class="nav-link inline-flex items-center transition-colors-100 p-2 h-full"
        >
          Search Meals
        </router-link>
      </div>
      <div class="relative">
        <router-link
          :to="{ name: 'byLetter' }"
          class="nav-link inline-flex items-center transition-colors-100 p-2 h-full"
        >
          Meals By Letter
        </router-link>
      </div>
      <div class="relative">
        <router-link
          :to="{ name: 'ingredients' }"
          class="nav-link inline-flex items-center transition-colors-100 p-2 h-full"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </div>
  </header>
</template>

<script></script>

<style>
.nav-link::after {
  content: "";
  position: absolute;
  border-bottom: 2px solid #fff;
  width: 0;
  left: 30%;
  bottom: 0;
  transition: all 0.6s;
}
.nav-link:hover::after {
  width: 100%;
}
</style>