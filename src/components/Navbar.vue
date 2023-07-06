<template>
  <header class="navbar shadow-[0_35px_35px_rgba(0,0,0,0.25)] h-16 flex justify-between items-stretch">
    <router-link to="/" class="inline-flex items-center h-full px-5 text-2xl">
      Home
    </router-link>
    <div @click="toggleMenu" class="nav flex items-center gap-1">
      <div class="relative">
        <router-link :to="{name: 'byName'}" class="nav-link inline-flex items-center transition-colors-100 p-2 h-full">
          Search Meals
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="{name: 'byLetter'}" class="nav-link inline-flex items-center transition-colors-100 p-2 h-full">
          Meals By Letter
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="{name: 'ingredients'}" class="nav-link inline-flex items-center transition-colors-100 p-2 h-full">
          Meals By Ingredients
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style>
.nav-link {

}
.nav-link::after {
  content: '';
  position: absolute;
  border-bottom: 2px solid #fff;
  width: 0;
  left: 30%;
  bottom: 0;
  transition: all .6s;
}
.nav-link:hover::after {
  width: 45px;
}
.navbar {
  background: rgb(27,27,48);
  background: radial-gradient(circle, rgba(27,27,48,1) 4%, rgba(30,27,48,1) 4%, rgba(30,28,50,1) 7%, rgba(27,34,49,1) 43%, rgba(13,18,62,1) 89%, rgba(24,38,79,1) 96%, rgba(30,30,137,1) 100%, rgba(8,26,132,1) 100%);
}
</style>