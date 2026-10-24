// Light/dark toggle. Light is the default; a viewer's choice is remembered.
let theme = "light";
try { theme = localStorage.getItem("theme") || "light"; } catch {}
document.documentElement.dataset.theme = theme;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");
  const update = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };
  update();
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    update();
  });
});
