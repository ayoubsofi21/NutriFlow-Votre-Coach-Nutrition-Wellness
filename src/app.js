import { integration, footer, home, Header } from "./ui/ui.js";

const routes = {
  "/": integration,
  "/home": () => `
    ${Header()}
    ${home()}
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
