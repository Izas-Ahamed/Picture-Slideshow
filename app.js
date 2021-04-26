var index = 0;
var z = 2000;
var check = true;
var slides = document.getElementsByClassName("images");
function nextfun() {
  clearTimeout(time);
  check = false;
  checktime = true;
  var innercheck = true;
  if (index == slides.length) {
    innercheck = false;
  }
  if (innercheck) {
    index++;
  }
  moveit();
  innercheck = true;
  checktime = true;
}
function prevfun() {
  clearTimeout(time);
  check = false;
  index--;
  moveit();
  checktime = true;
}
moveit();
var time;
function moveit() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (check) {
    index++;
  }
  if (index <= 0) {
    index = 1;
  }
  if (index > slides.length) {
    index = slides.length;
  }
  slides[index - 1].style.display = "block";
  time = setTimeout(moveit, z);
  check = true;
  //3000ms
}
