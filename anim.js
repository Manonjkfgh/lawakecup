'use strict';


var $btn = document.querySelector('.btn');

$btn.addEventListener('click', function (e) {
  window.requestAnimationFrame(function () {
    $btn.classList.remove('is-animating');
    
    window.requestAnimationFrame(function () {
      $btn.classList.add('is-animating');
    });
  });
});


var $btn2 = document.querySelector('.btn2');

$btn2.addEventListener('click', function (e) {
  window.requestAnimationFrame(function () {
    $btn2.classList.remove('is-animating');
    
    window.requestAnimationFrame(function () {
      $btn2.classList.add('is-animating');
    });
  });
});