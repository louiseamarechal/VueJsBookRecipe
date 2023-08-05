<script setup>
const props = defineProps({
  recipe: Array,
});

const recipe = props.recipe[0];
console.log(recipe);

const asArray = Object.entries(recipe);
const ingredients = asArray.filter(
  ([key, value]) => key.includes("strIngredient") && value
);
console.log(ingredients);

</script>

<template>
  <h2>{{ recipe.strMeal }}</h2>
  <img :src="recipe.strMealThumb" alt="recipe picture" />
  <h3>Ingredients :</h3>
  <ul>
    <li v-for="ingredient in ingredients">{{ ingredient[1] }}</li>
  </ul>
  <p>{{ recipe.strInstructions }}</p>
  <!-- 
        nom de la recette
        photo de la recette
        ingredients
     -->
</template>

<style></style>
