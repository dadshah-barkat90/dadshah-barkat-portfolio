// Reviews Carousel
const carousel = document.getElementById("carousel");
let scrollAmount = 0;

// Move carousel left or right
function scrollCarousel(direction) {
  const cardWidth = carousel.children[0].offsetWidth + 20; // width + gap
  scrollAmount += direction * cardWidth;

  // Limit scrolling (loop back)
  if (scrollAmount < 0) scrollAmount = (carousel.children.length - 1) * cardWidth;
  if (scrollAmount > (carousel.children.length - 1) * cardWidth) scrollAmount = 0;

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// Auto-scroll every 4 seconds
setInterval(() => {
  scrollCarousel(1);
}, 4000);

// Swipe support for mobile
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    scrollCarousel(1); // swipe left → next
  } else if (startX < endX - 50) {
    scrollCarousel(-1); // swipe right → prev
  }
});

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Change icon (bars ↔ close)
  hamburger.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close nav when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});
