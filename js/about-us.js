const chnumbers = document.querySelector('.apo_numbers_wrapper');
console.log(chnumbers);
let s = 2;

setInterval(function chnge() {
  s = s + 31;
  if (s < 750) {
    chnumbers.style.bottom = -s + 'px';
  } else clearInterval(chnge);
}, 500);

const chnumbersmob = document.querySelector('.apo_numbers_wrapper_mob');
console.log(chnumbersmob);
let f = 2;

setInterval(function changemob() {
  f = f + 31;
  if (f < 750) {
    chnumbersmob.style.bottom = -f + 'px';
  } else clearInterval(changemob);
}, 500);
