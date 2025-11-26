const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const closeDropDown = document.getElementById("btn-close");

hamburger.addEventListener("click", (e) => {
  toggleNavbar();
});

closeDropDown.addEventListener("click", (e) => {
  toggleNavbar();
});

function toggleNavbar() {
  dropdown.classList.toggle("hidden");
  if (!dropdown.classList.contains("hidden")) {
    dropdown.classList.add("flex", "justify-center", "items-center");
  } else {
    dropdown.classList.remove("flex", "justify-center", "items-center");
  }
}
