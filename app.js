const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const closeDropDown = document.getElementById("btn-close");

hamburger.addEventListener("click", (e) => {
  dropdown.classList.toggle("hidden");
});

closeDropDown.addEventListener("click", (e) => {
  dropdown.classList.toggle("hidden");
});
