<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import FetchData from "./utils/FetchData";
import { Suspense } from "vue";
import DisplayRecipes from "./components/DisplayRecipes.vue"
</script>

<template>
  <h1>Welcome to your Book Recipe :</h1>
  <Suspense>
    <DisplayRecipes />
  </Suspense>
</template>

<style>
h1 {
  color: white;
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
