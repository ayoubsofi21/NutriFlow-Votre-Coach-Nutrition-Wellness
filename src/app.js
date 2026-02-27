import { integration, footer, home, Header } from "./ui/ui.js";
import { fetchAndDisplayData } from "./api/recipeProvider.js";

const routes = {
  //   "/":
  //    () => `
  //       ${integration()}
  //     `,

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
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
