const slideWidht = document.querySelector('.carusel__wrapper').clientWidth,
      countOfSlides = document.querySelectorAll('.slider__image').length,
      lent = document.querySelector('.carusel__lent'),
      nextButton = document.querySelector('.right'),
      prevBtn = document.querySelector('.left');

let offset = 0;


function next() {
   if(offset < (slideWidht * (countOfSlides-1))){
      offset += slideWidht
   } else {
      offset = 0
   }
   lent.style.transform = `translateX(-${offset}px)`
}

function left() {
   if(offset <= 0) {
      offset = (slideWidht * (countOfSlides-1))
   } else {
      offset -= slideWidht
   }
   lent.style.transform = `translateX(-${offset}px)`
}
nextButton.addEventListener('click', next)
prevBtn.addEventListener('click', left)


// setInterval(next, 2000);

