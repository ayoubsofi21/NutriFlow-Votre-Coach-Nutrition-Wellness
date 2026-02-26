import { integration, footer, home, Header } from "./ui/ui.js";
import { render } from "./ui/render.js";
import { fetchAndDisplayData } from "./api/recipeProvider.js";
function init() {
  render(home, fetchAndDisplayData); // Render HTML first
  //   fetchAndDisplayData(); //  Then fetch data
}

const routes = {
  //   "/": integration,
  "/": () => `
    ${Header()}
    ${home()}
    ${fetchAndDisplayData()}
    ${footer()}
  `,
  "/detail": () => ` ${Header() + footer()}`,
  "/favorite": () => `${Header() + footer()}`,
};

function router() {
  const path = window.location.hash.slice(1) || "/";
  const view = routes[path] || (() => "<h1>404</h1>");
  document.getElementById("app").innerHTML = view();
}

window.addEventListener("hashchange", router);
router();
init();
