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
*  show list of dates ...
*/
(function calendarSetup(id) {

   var thisDate, zDate = new Date(), x = 0, y = 0;
   
   var g = document.createElementNS("http://www.w3.org/2000/svg", 'g');                  
   g.setAttribute("id", 'dates');
   g.setAttribute("fill", '#fff');
   g.setAttribute("font-size", 24);  
   g.setAttribute("text-anchor", 'middle');  

   var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');               
   rect.setAttribute("x", 100);
   rect.setAttribute("y", 150);    
   rect.setAttribute("width", 18100);    
   rect.setAttribute("height", 80);    
   rect.setAttribute("rx", 10);    
   rect.setAttribute("fill", 'rgba(0,0,64,0.8)');
   
   g.appendChild(rect);             
   
   do {
     zDate = new Date(parseInt(zDate.getTime())+86400000);
     x = (zDate.getMonth() * 305) + 305;
     var thisDate = parseInt((zDate.getFullYear() * 1.0E4) + ((zDate.getMonth() + 1) * 1.0E2) + zDate.getDate());
     
     var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');            
     rect.setAttribute("x", x);
     rect.setAttribute("y", 1);    
     rect.setAttribute("width", 300);    
     rect.setAttribute("height", 75);    
     rect.setAttribute("rx", 15);    
     rect.setAttribute("fill", 'rgba(0,0,255,0.5)');                      
     rect.setAttribute("zdate", thisDate);   
     
     g.appendChild(rect); 
     
     var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');            
     text.setAttribute("x", x + 150);
     text.setAttribute("y", y + 47);      
     text.setAttribute("fill", '#fff');            
     text.textContent = formatT(thisDate.toString());    
     
     g.appendChild(text);             
                        
   } while (thisDate.getFullYear() === thisYear && x < 18100);
   
   id.appendChild(g);
  
   return; 
  
   function formatT(base) {
     var m = "   JANFEBMARAPRMAJJUNJULAUGSEPOCTNOVDEC";
     var i = parseInt(base.substr(4,2) * 3);
     return base.substr(6,2) + m.substr(i, 3) + base.substr(0,4);
   }
})(document.getElementById("zCalendar"));
