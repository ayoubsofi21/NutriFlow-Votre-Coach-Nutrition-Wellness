export function renderRecipes(recipes) {
  const cardsContainer = document.querySelector(".cards");

  if (!cardsContainer) {
    console.error(".cards container not found!");
    return;
  }

  // Clear previous results
  cardsContainer.innerHTML = "";

  // If no recipes are found, show a message
  if (recipes.length === 0) {
    cardsContainer.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  // Iterate through the recipes and create a card for each
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <p>${recipe.cuisine || "Recipe"}</p>
      <div class="card-footer">
        <span class="cal orange">cal: ${recipe.caloriesPerServing || 0}</span>
        <i class="far fa-heart"></i>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}
