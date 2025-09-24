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

const track = document.querySelector(".loved-list");
const dots = document.querySelectorAll(".loved-dot");
const items = document.querySelectorAll(".loved-list-item");

function updateActiveDot() {
  const scrollLeft = track.scrollLeft;
  const maxScrollLeft = track.scrollWidth - track.clientWidth;
  const itemWidth = items[0].offsetWidth + 16;

  let index = Math.round(scrollLeft / itemWidth);

  if (scrollLeft >= maxScrollLeft - 1) {
    index = dots.length - 1;
  }

  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

track.addEventListener("scroll", () => {
window.requestAnimationFrame(updateActiveDot);
});
window.addEventListener("resize", updateActiveDot);