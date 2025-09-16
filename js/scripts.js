const modalLayer = document.querySelector(".modal-overlay");
const modalOpenBtn = document.querySelector(".loved-button");
const modalCloseBtn = document.querySelector(".modal-close-btn");

const mMenuLayer = document.querySelector(".mobile-menu");
const mMenuBurgerBtn = document.querySelector(".burger-btn");
const mMenuCloseBtn = document.querySelector(".close-btn");
const mMenuInnerLinks = document.querySelector(".mobile-menu .navigation-list");

modalOpenBtn.addEventListener("click", (event) => {
  {
    modalLayer.classList.add("is-open");
  }
});

modalCloseBtn.addEventListener("click", (event) => {
  {
    modalLayer.classList.remove("is-open");
  }
});

mMenuBurgerBtn.addEventListener("click", (event) => {
  mMenuLayer.classList.add("is-open");
});

mMenuCloseBtn.addEventListener("click", (event) => {
  mMenuLayer.classList.remove("is-open");
});

mMenuInnerLinks.addEventListener("click", (event) => {
  if (event.target.nodeName !== "A") {
    return;
  }
  mMenuLayer.classList.remove("is-open");
});
