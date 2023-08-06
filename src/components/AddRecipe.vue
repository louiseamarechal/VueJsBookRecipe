<script setup></script>

<template>
  <form action="" method="get" class="form-recipe">
    <div>
      <label for="recipe-name">Name of the recipe: </label>
      <input type="text" name="name" id="name" required />
    </div>
    <div>
      <label for="img">Recipe picture: </label>
      <input type="file" name="file" id="file" required />
    </div>

    <div>
      <label for="imgredients">Ingredients: </label>
      <textarea name="ingredients" cols="40" rows="5"></textarea>
    </div>
    <div>
      <label for="imgredients">Instructions: </label>
      <textarea name="instructions" cols="40" rows="5"></textarea>
    </div>

    <div>
      <input type="submit" value="Add Recipe" />
    </div>
  </form>
</template>

<style>
</style>
