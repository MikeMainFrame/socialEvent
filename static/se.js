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
    var thisDate = new Date(), temp = thisDate, firstJan = new Date();
    firstJan.setDate(1), firstJan.setMonth(0); 
    do {    
      if (thisDate.getDay() === 1) {
         zHook.appendChild(div) 
         var div = document.createElement('div');      
      } 
      var span = document.createElement('span');
      span.textContent = thisDate.getDate(); 
      div.appendChild(span);
      thisDate.setTime(parseInt(thisDate.getTime()) + (24*60*60*1000));  
    } while (thisDate.getFullYear() === firstJan.getFullYear());
    zHook.appendChild(div);
})
();
