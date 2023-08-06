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
  <div class="recipe-card">
    <div class="header-picture">
      <h2 class="recipe-title">{{ recipe.strMeal }}</h2>
      <img :src="recipe.strMealThumb" alt="recipe picture" />
    </div>
    <div class="ingredients">
      <h3>Ingredients :</h3>
      <ul>
        <li v-for="ingredient in ingredients">{{ ingredient[1] }}</li>
      </ul>
    </div>
    <p class="recipe-instruction">{{ recipe.strInstructions }}</p>
  </div>
</template>

<style>
.recipe-card {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  height: 30%;
  gap: 5%;
  padding-right: 5%;
}
.recipe-card img {
  border-radius: 15%;
  /* height: 30%; */
  width: 250px;
}

.header-picture {
  width: 30%;
}

.recipe-instruction {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
}
</style>s
