import { loader } from "../ui/loader.js"; // Correct path to loader.js from recipeProvider.js
const API_URL = "https://dummyjson.com/recipes";

// Fetch and display all recipes
export async function fetchAndDisplayData() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = loader();
  try {
    // Fetch recipes from the API
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();
    setTimeout(() => {
      // Clear the loader and show the data
      cardsContainer.innerHTML = ""; // Remove loader
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
    }, 2000);
  } catch (error) {
    // Error handling if the fetch fails
    console.error("Error fetching recipes:", error);
    cardsContainer.innerHTML = `<p>Error loading recipes</p>`; // Show error message
  }
}

export async function searchRecipes(query) {
  const cardsContainer = document.querySelector(".cards");

  // Show the loader initially while searching
  cardsContainer.innerHTML = loader(); // Show the loader spinner
  try {
    const response = await fetch(`${API_URL}?search=${query}`);
    if (!response.ok) throw new Error("Failed to search recipes");
    const data = await response.json();
    cardsContainer.innerHTML = "";
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
