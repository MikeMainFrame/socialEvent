(function initializeCKEDITOR5 () {
  
  var zEditorA = document.getElementById("CKEDITOR5x0");
  
  InlineEditor.create(zEditorA)
              .then(console.log("CKEDITOR5x0"))
              .catch( error => { console.error( error )});    
  
  zEditorA.addEventListener("blur", function () {console.log(this.innerHTML)});
})
();
(function zcalendarSetup() {
    return; // work in progress
    var zHook = document.getElementById("zCalendar"), div = document.createElement('div'); 
    var thisDate = new Date(), thisYear = thisDate.getFullYear();
    do {    
      if (thisDate.getDate() === 1) {
        zHook.appendChild(div) 
        var div = document.createElement('div');     
        div.setAttribute("class","month");
      } 
      var divDate = document.createElement('div');
      divDate.setAttribute("class","day");
      divDate.textContent = thisDate.getDate(); 
      div.appendChild(divDate);
      thisDate.setTime(parseInt(thisDate.getTime()) + (24*60*60*1000));  
    } while (thisDate.getFullYear() === thisYear);
    zHook.appendChild(div);
})
();
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
