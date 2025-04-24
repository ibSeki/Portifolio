let position = 0;
const carousel = document.getElementById("carousel");

function moveCarousel(direction) {
  const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 16;
  const maxPosition = carousel.children.length - 1;
  position = Math.min(Math.max(position + direction, 0), maxPosition);
  carousel.scrollTo({ left: position * itemWidth, behavior: "smooth" });
}
