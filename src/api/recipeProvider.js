export async function fetchAndDisplayData() {
  const cardsContainer = document.querySelector(".cards");

  if (!cardsContainer) {
    console.error(".cards container not found!");
    return;
  }

  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) throw new Error("Failed to fetch recipes");

    const data = await response.json();

    cardsContainer.innerHTML = "";

    data.recipes.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.image}" />
        <h3>${item.name}</h3>
        <p>${item.cuisine || "Recipe"}</p>
        <div class="card-footer">
          <span class="cal orange">cal : ${item.caloriesPerServing || 0}</span>
          <i class="far fa-heart"></i>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    cardsContainer.innerHTML = `<p>Error loading recipes</p>`;
  }
}
