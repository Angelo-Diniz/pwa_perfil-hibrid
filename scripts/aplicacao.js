(function() {
  'use strict';

  window.onload = function() {

  }

  $('#button').click(() => {
    localStorage.setItem('comida', document.getElementById("comida").value);
    localStorage.setItem('bebida', document.getElementById("bebida").value);
    localStorage.setItem('animal', document.getElementById("animal").value);
    localStorage.setItem('cor', document.getElementById("cor").value);
    window.location.href = "index2.html";

  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
