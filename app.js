const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", (e) => {
  dropdown.classList.toggle("hidden");
});
