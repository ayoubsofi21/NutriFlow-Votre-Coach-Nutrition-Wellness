import { integration, footer, home, Header } from "./ui/ui.js";
import { fetchAndDisplayData, searchRecipes } from "./api/recipeProvider.js";
import { renderRecipes } from "./ui/render.js";

const routes = {
  "/": () => `
      ${Header()}
      ${home()}
      ${footer()}
    `,

  "/detail": () => `
      ${Header()}
      ${footer()}
    `,

  "/favorite": () => `
      ${Header()}
      ${footer()}
    `,
};

function router() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("#app not found in HTML");
    return;
  }

  const path = window.location.hash.slice(1) || "/";
  const view = routes[path] || (() => "<h1>404</h1>");

  app.innerHTML = view();

  if (path === "/") {
    fetchAndDisplayData();
    SearchListener();
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
document.addEventListener("DOMContentLoaded", fetchAndDisplayData);

// Search functionality
function SearchListener() {
  const searchInput = document.querySelector("#search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value;
      searchRecipes(query)
        .then((recipes) => {
          // console.log(recipes);
          renderRecipes(recipes);
        })
        .catch((err) => {
          console.error("Error searching recipes:", err);
        });
    });
  } else {
    console.error("Search input not found!");
  }
}
