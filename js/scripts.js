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

// Loved section

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

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {

    const isTablet = window.matchMedia("(min-width: 767px) and (max-width: 1199px)").matches;

    if (isTablet) {
      const itemWidth = items[0].offsetWidth - 160;
      const scrollTo = index * itemWidth;

      track.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    } else {
      const itemWidth = items[0].offsetWidth + 13;
      const scrollTo = index * itemWidth;

      track.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }

  });
});
window.addEventListener("load", updateActiveDot);

// Made section, play video

const thumb = document.querySelector('.made-thumb');
const playBtn = document.querySelector('.made-play-btn');
const video = document.querySelector('.made-video');

playBtn.addEventListener('click', () => {
  thumb.classList.add('is-playing');
  video.setAttribute('controls', '');
  video.play();
  playBtn.style.display = 'none';
});

video.addEventListener('ended', () => {
  thumb.classList.remove('is-playing');
  playBtn.style.display = '';
});

// Buy now modal

const buymodalLayer = document.querySelector(".buynow-backdrop");
const buymodalOpenBtn = document.querySelector(".btn-buy");
const buymodalCloseBtn = document.querySelector(".buynow-modal-close-btn");

buymodalOpenBtn.addEventListener("click", (event) => {
  {
    buymodalLayer.classList.add("is-open");
  }
});

buymodalCloseBtn.addEventListener("click", (event) => {
  {
    buymodalLayer.classList.remove("is-open");
  }
});
