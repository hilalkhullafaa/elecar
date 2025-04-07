/**
 * Toggle button menu navigation
 */
const navList = document.querySelector(".nav-list");
const toggleBtn = document.querySelectorAll("[data-nav-toggler]");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navListBtn = document.querySelectorAll(".nav-item");

toggleBtn.forEach((i) => {
  i.addEventListener("click", () => {
    navList.classList.toggle("active");
    if (navList.classList.contains("active")) {
      openBtn.style.display = "none";
      closeBtn.style.display = "inline";
    } else {
      openBtn.style.display = "inline";
      closeBtn.style.display = "none";
    }
  });
});

navListBtn.forEach((i) => {
  i.addEventListener("click", () => {
    navList.classList.remove("active");
    openBtn.style.display = "inline";
    closeBtn.style.display = "none";
  });
});

/**
 * SCROLL HEADER
 */
const navigation = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navigation.classList.add("show");
  } else {
    navigation.classList.remove("show");
  }
});
