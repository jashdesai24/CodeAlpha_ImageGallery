let images = document.querySelectorAll(".gallery img");
let current = 0;

function openLightbox(index) {
  current = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[current].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function next() {
  current = (current + 1) % images.length;
  document.getElementById("lightbox-img").src = images[current].src;
}

function prev() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[current].src;
}
