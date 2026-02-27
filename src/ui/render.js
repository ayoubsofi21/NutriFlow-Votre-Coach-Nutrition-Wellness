export function render(viewFunction, afterRender) {
  const app = document.querySelector("#app");
  if (!app) return;

  app.innerHTML = viewFunction();

  if (afterRender) {
    afterRender();
  }
}
