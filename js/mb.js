'use strict';

window.onload = function() {
  var canvas_el = document.getElementById('particles-js');

   var mlc = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: 250,
    color: '#B1B9B5'
  };

  var init = function() {
    mlc.canvas.ctx = mlc.canvas.el.getContext('2d');
    mlc.canvas.el.width = mlc.canvas.w;
    mlc.canvas.el.height = mlc.canvas.h;

    for(var i = 0; i < mlc.particles; i++) {
      mlc.canvas.ctx.fillStyle = mlc.color;
      mlc.canvas.ctx.beginPath();

      mlc.canvas.ctx.arc(Math.random() * mlc.canvas.w, Math.random() * mlc.canvas.h, .8, 0, Math.PI*2, true);

      mlc.canvas.ctx.closePath();
      mlc.canvas.ctx.fill();
    }
  };

  init();
};
