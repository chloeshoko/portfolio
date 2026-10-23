// Filters the work list by kind (print, documentary, design).
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".index li");
const empty = document.querySelector(".empty");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

    let shown = 0;
    items.forEach((item) => {
      const match = filter === "all" || item.dataset.kind === filter;
      item.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown > 0;
  });
});
