const track = document.querySelector(".loved-list");
const dots = document.querySelectorAll(".loved-dot");
const items = document.querySelectorAll(".loved-list-item");

function updateActiveDot() {
const scrollLeft = track.scrollLeft;
const itemWidth = items[0].offsetWidth + 16;
const index = Math.round(scrollLeft / itemWidth);

dots.forEach((dot) => dot.classList.remove("active"));
if (dots[index]) dots[index].classList.add("active");
}

track.addEventListener("scroll", () => {
window.requestAnimationFrame(updateActiveDot);
});

