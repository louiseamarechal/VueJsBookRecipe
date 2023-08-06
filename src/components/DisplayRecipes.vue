<script setup>
import FetchData from "../utils/FetchData";
import DisplaySingleRecipe from "./DisplaySingleRecipe.vue"

const recipes = await FetchData(
  "https://www.themealdb.com/api/json/v1/1/random.php",
  10
);
console.log(recipes);
</script>

<template>
    <ul>
      <li v-for="recipe in recipes" class="recipes">
        <DisplaySingleRecipe :recipe="recipe"/>
      </li>
    </ul>
</template>

<style>
.recipes {
  height: 30%;
  list-style-type: none;
}
</style>
