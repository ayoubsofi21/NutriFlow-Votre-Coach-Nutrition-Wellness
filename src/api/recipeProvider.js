// Constants
const API_URL = "https://dummyjson.com/recipes";

// Fetches and displays all recipes
export async function fetchAndDisplayData() {
  try {
    // Fetch recipes from the API
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();
    const cardsContainer = document.querySelector(".cards");
    if (!cardsContainer) {
      console.error(".cards container not found!");
      return;
    }
    // Clear the container before adding new data
    cardsContainer.innerHTML = "";

    // Loop through each recipe and create a card for it
    data.recipes.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Construct the card HTML
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.cuisine || "Recipe"}</p>
        <div class="card-footer">
          <span class="cal orange">cal: ${item.caloriesPerServing || 0}</span>
          <i class="far fa-heart"></i>
        </div>
      `;
      // Append the card to the container
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    // Error handling if the fetch fails
    console.error("Error fetching recipes:", error);
    cardsContainer.innerHTML = `<p>Error loading recipes</p>`;
  }
}

export async function searchRecipes(query) {
  try {
    const response = await fetch(`${API_URL}?search=${query}`);
    if (!response.ok) throw new Error("Failed to search recipes");
    const data = await response.json();
    const result = [];
    for (const recipe of data.recipes) {
      if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
        result.push(recipe);
      }
    }

    return result;
  } catch (error) {
    console.error("Error searching recipes:", error);
    return [];
  }
}
