<script setup>
import { reactive } from "vue";

const props = defineProps({
  recipes: Array,
});

const array = [];

const newRecipe = reactive([
  {
    strMeal: "",
    strMealThumb: "",
    strIngredient: "",
    strInstructions: "",
  },
]);

function handleSubmit() {
  console.log(newRecipe);
  array.push(newRecipe);
  props.recipes.value.push({ ...array });
}
</script>

<template>
  <form action="" method="get" class="form-recipe">
    <div>
      <label for="recipe-name">Name of the recipe: </label>
      <input
        v-model="newRecipe.strMeal"
        type="text"
        name="name"
        id="name"
        required
      />
    </div>
    <div>
      <label for="img">Recipe picture: </label>
      <input type="file" name="file" id="file" required />
    </div>

    <div>
      <label for="ingredients">Ingredients: </label>
      <textarea
        v-model="newRecipe.strIngredient"
        name="ingredients"
        cols="40"
        rows="5"
      ></textarea>
    </div>
    <div>
      <label for="instructions">Instructions: </label>
      <textarea
        v-model="newRecipe.strInstructions"
        name="instructions"
        cols="40"
        rows="5"
      ></textarea>
    </div>

    <div>
      <input @click.prevent="handleSubmit" type="submit" value="Add Recipe" />
    </div>
  </form>
</template>

<style></style>
