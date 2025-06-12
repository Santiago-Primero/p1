const a = document.getElementById("a");
const b = document.getElementById("b");

a.addEventListener("input", () => {
  b.textContent = a.value;
});
