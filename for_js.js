function func(){
      document.querySelector('.menu_ul').classList.toggle('open');
      document.querySelector('.burger_bar').classList.toggle('open');
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slide');
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



var slideIndex_ev = 1;
showSlides_ev(slideIndex_ev);

// Next/previous controls
function plusSlides_ev(n_ev) {
  showSlides_ev(slideIndex_ev += n_ev);
}

// Thumbnail image controls
function currentSlide_ev(n_ev) {
  showSlides_ev(slideIndex_ev = n_ev);
}

function showSlides_ev(n_ev) {
  var i;
  var slides_ev = document.getElementsByClassName('slide_ev');
  if (n_ev > slides_ev.length){
    slideIndex_ev = 1;
  }
  if (n_ev < 1) {
    slideIndex_ev = slides_ev.length;
  }
  for (i = 0; i < slides_ev.length; i++) {
      slides_ev[i].style.display = "none";
  }
  slides_ev[slideIndex_ev-1].style.display = "block";
}
