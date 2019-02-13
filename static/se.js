/***
*  show list of dates as a band you can scroll sideways - horizontal...
*/
(function calendarSetup(id) {

   var today = new Date(), thisDate, zDate = new Date(), y = 0, ix = 0;
      
   do {
     zDate = new Date(parseInt(zDate.getTime())+86400000);
     var thisDate = parseInt((zDate.getFullYear() * 1.0E4) + ((zDate.getMonth() + 1) * 1.0E2) + zDate.getDate());
     var span = document.createElement('span'); 
     span.setAttribute("style","width: 36vh ; padding: 0 2vh");
     span.textContent = formatT(thisDate.toString());    
     id.appendChild(span);                           
   } while (today.getFullYear() === zDate.getFullYear());
   
   return; 
  
   function formatT(base) {
     var m = "   JANFEBMARAPRMAJJUNJULAUGSEPOCTNOVDEC";
     var i = parseInt(base.substr(4,2) * 3);
     return base.substr(6,2) + m.substr(i, 3) + base.substr(0,4);
   }
  
})(document.getElementById("zCalendar"));
