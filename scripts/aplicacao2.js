(function() {
    'use strict';
  
    window.onload = function() {
 
      var div = document.getElementById('comida');
     div.innerHTML += localStorage.getItem('comida');
      
     var div = document.getElementById('bebida');
     div.innerHTML += localStorage.getItem('bebida');
      
     var div = document.getElementById('animal');
     div.innerHTML += localStorage.getItem('animal');
      
     var div = document.getElementById('cor');
     div.innerHTML += localStorage.getItem('cor');
    }

  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
    }
  })();
  