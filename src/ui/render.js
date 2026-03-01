import { openRecipeModal } from "../api/recipeProvider.js"; // Make sure to import openRecipeModal function

export function renderRecipes(recipes) {
  const cardsContainer = document.querySelector(".cards");

  // Clear previous results
  cardsContainer.innerHTML = "";

  // Check if there are no recipes
  if (recipes.length === 0) {
    cardsContainer.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  // Iterate through each recipe and create a card for each
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
      <h3>${recipe.name}</h3>
      <p>${recipe.cuisine || "Recipe"}</p>
      <div class="card-footer">
        <span class="cal orange">cal: ${recipe.caloriesPerServing || 0}</span>
        <i class="far fa-heart"></i>
      </div>
    `;

    cardsContainer.appendChild(card);

    // Add click event to image to open modal with recipe details
    const image = card.querySelector(".recipe-image");
    image.addEventListener("click", () => {
      cardsContainer.innerHTML = "";
      openRecipeModal(recipe); // Open modal with the recipe details
    });
  });
}
