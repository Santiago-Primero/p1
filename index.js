document.addEventListener("DOMContentLoaded", () => {
    const a = document.getElementById("a"); // campo donde escribís
    const b = document.getElementById("b"); // zona donde se muestra
    a.addEventListener("input", () => b.textContent = a.value);
  });
  
  