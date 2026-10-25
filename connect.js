// Copies the email address, for visitors without a mail app set up.
document.querySelectorAll(".copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers, or pages opened straight from a file
      const field = document.createElement("textarea");
      field.value = text;
      document.body.append(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = "Copy"; }, 2000);
  });
});
