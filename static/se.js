(function initializeCKEDITOR5 () {
  
  var zEditorA = document.getElementById("CKEDITOR5x0");
  
  InlineEditor.create(zEditorA)
              .then(console.log("CKEDITOR5x0"))
              .catch( error => { console.error( error )});
    
  var zEditorB = document.getElementById("CKEDITOR5x1");
  
  InlineEditor.create(zEditorB)
              .then(console.log("CKEDITOR5x1"))
              .catch( error => { console.error( error )});
  
  zEditorA.addEventListener("blur", function () {console.log(this.innerHTML)});
})
();
(function calendarSetup() {
    var zHook = document.getElementById("zCalendar"), div = document.createElement('div'); 
    var thisDate = new Date(), lastDay = new Date();
    lastDay.setDate(31), lastDay.setMonth(11); 
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
      thisDate.setTime(parseInt(thisDate.getTime()) - (24*60*60*1000));  
    } while (thisDate.getFullYear() === lastDay.getFullYear());
    zHook.appendChild(div);
})
();
