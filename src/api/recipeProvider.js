import { loader } from "../ui/loader.js";
import { renderRecipes } from "../ui/render.js";

const API_URL = "https://dummyjson.com/recipes";

// Fetch and display all recipes
export async function fetchAndDisplayData() {
  const cardsContainer = document.querySelector(".cards");

  // Show loader while fetching data
  cardsContainer.innerHTML = loader();

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();

    // Simulate a delay to show loader for 2 seconds
    setTimeout(() => {
      // Clear loader and show recipes
      cardsContainer.innerHTML = ""; // Clear the loader

      // Call renderRecipes to display the recipes
      renderRecipes(data.recipes);
    }, 2000);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    cardsContainer.innerHTML = "<p>Error loading recipes</p>"; // Show error message
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
export function openRecipeModal(recipe) {
  const modal = document.getElementById("recipe-modal");
  const modalName = document.getElementById("recipe-name");
  const modalImage = document.getElementById("recipe-image");
  const modalDescription = document.getElementById("recipe-description");
  const modalIngredients = document.getElementById("recipe-ingredients");
  const modalInstructions = document.getElementById("recipe-instructions");
  const closeBtn = document.querySelector(".close-btn");

  // Populate modal with recipe data
  modalName.innerText = recipe.name;
  modalImage.src = recipe.image;
  modalDescription.innerText = `Category: ${recipe.category || "No category"}`;
  modalIngredients.innerHTML = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join(""); // Join ingredients in a list
  modalInstructions.innerText = recipe.instructions;

  console.log("Opening modal with recipe:", recipe.name); // Debugging log

  // Show the modal
  modal.style.display = "block"; // Make the modal visible

  // Close modal on clicking the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Close modal
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // Close modal if clicked outside
    }
  });
}
