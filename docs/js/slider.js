var slides = document.querySelectorAll(".slide__item");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
  slides[currentSlide].classList.remove("slide__item--show");
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add("slide__item--show");
}
