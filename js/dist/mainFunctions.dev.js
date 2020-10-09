"use strict";

var imgBody = document.getElementById('img-body');
imgBody.addEventListener('mouseover', function changeImage() {
  imgBody.src = '../img/IMG-20200202-WA0031.jpg';
});
imgBody.addEventListener('mouseleave', function changeImage() {
  imgBody.src = '../img/IMG-20200202-WA0031-upsidedown.jpg';
});