// Shows the comic one page at a time. Flip with the buttons, the arrow keys,
// a swipe, or by clicking the right or left half of the page.
const pages = [...document.querySelectorAll(".comic-pages li")];
const controls = document.querySelector(".comic-controls");
const prev = controls.querySelector(".prev");
const next = controls.querySelector(".next");
const count = controls.querySelector(".count");
let current = 0;

function show(i) {
  current = Math.max(0, Math.min(pages.length - 1, i));
  pages.forEach((page, n) => { page.hidden = n !== current; });
  prev.disabled = current === 0;
  next.disabled = current === pages.length - 1;
  count.textContent = current === 0 ? `Cover · ${pages.length - 1} pages` : `Page ${current} of ${pages.length - 1}`;
}

controls.hidden = false;
document.querySelector(".comic").classList.add("flipping");
prev.addEventListener("click", () => show(current - 1));
next.addEventListener("click", () => show(current + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") show(current + 1);
  if (e.key === "ArrowLeft") show(current - 1);
});

pages.forEach((page) => {
  page.addEventListener("click", (e) => {
    const box = page.getBoundingClientRect();
    show(e.clientX > box.left + box.width / 2 ? current + 1 : current - 1);
  });
});

let startX = null;
document.querySelector(".comic-pages").addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
document.querySelector(".comic-pages").addEventListener("touchend", (e) => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 40) show(dx < 0 ? current + 1 : current - 1);
  startX = null;
});

show(0);
