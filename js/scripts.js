const modalLayer = document.querySelector(".modal-overlay");
const modalOpenBtn = document.querySelector(".loved-button");
const modalCloseBtn = document.querySelector(".modal-close-btn");

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
