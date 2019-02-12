var slides = document.querySelectorAll(".slide__item"); //все слайды
var radio = document.querySelectorAll(".slide__radio"); //все радикнопки
var currentSlide = 0; //счетчик слайдов
var next = document.querySelector('.slider__btn-next'); //кнопка вперед
var previous = document.querySelector('.slider__btn-prev'); // кнопка назад
var slideInterval = setInterval(nextSlide,3000); //интервал повторения

function pauseSlideshow() {
  clearInterval(slideInterval); //очистка интервала повторения
};

next.onclick = function() { //при клике на вперед
  pauseSlideshow(); //прекращение авто слайд шоу
  nextSlide(); //вызов функции
};

previous.onclick = function() { // при клике на назад
  pauseSlideshow(); //прекращение авто слайд шоу
  previousSlide(); //вызов функции
};

for (var i = 0; i < radio.length; i ++) {
  radio[i].onclick = function() {
    pauseSlideshow(); //прекращение авто слайд шоу
    goToSlide(this.id); //переход к слайду (по id input'а)
  };
};

function nextSlide() {
 goToSlide(currentSlide+1); //вызов функции и передача в нее № следующего слайда
};

function previousSlide() {
 goToSlide(currentSlide-1); //вызов функции и передача в нее № предыдущего слайда
};

function goToSlide(n) {
  radio[currentSlide].removeAttribute("checked"); //снятие атрибута у текущей радио радио кнопки
  slides[currentSlide].classList.remove("slide__item--show"); //убираем класс с текущего слайда
  currentSlide = (n+slides.length)%slides.length; // текущий слайд -1 или +1
  radio[currentSlide].setAttribute("checked", true); //установка атрибута у текущей радио радио кнопки
  slides[currentSlide].classList.add("slide__item--show"); //назначаем класс текущему слайду
};
