(function slam (t0) {
  setInterval(moveHands, 5000);     
  function moveHands() {
   var now = Date.now(); 
   var diffSec = (t0 - now) / 1000;
   var days = parseInt(diffSec / (60 * 60 * 24));
   var minutes = parseInt((diffSec - (days * 60 * 60 * 24)) / 60);
   document.getElementById("tMinus").textContent =  "T - " + days + " days " + minutes + " minutes";
  }
})
(1658856356411);
