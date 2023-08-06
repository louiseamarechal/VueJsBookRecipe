<script setup>
import { Suspense } from "vue";
import DisplayRecipes from "./components/DisplayRecipes.vue";
import AddRecipe from "./components/AddRecipe.vue";
</script>

<template>
  <div class="welcome-screen">
    <h1>Welcome to your Book Recipe :</h1>
  </div>
  <div class="add-recipe">
    <AddRecipe />
  </div>
    <Suspense>
      <DisplayRecipes />
    </Suspense>
</template>

<style>
.welcome-screen {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.add-recipe {
  height: 20%;
}
</style>
