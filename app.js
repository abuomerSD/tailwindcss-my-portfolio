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

// darkmode toggle

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  //save theme to local storage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  if (!dropdown.classList.contains("hidden")) {
    dropdown.classList.toggle("hidden");
  }
}

// set theme on page load

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});
