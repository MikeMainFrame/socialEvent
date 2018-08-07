(function initializeCKEDITOR5 () {
  
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  var zEditorA = document.getElementById("CKEDITOR5x0");
  
  InlineEditor.create(zEditorA)
              .then(console.log("CKEDITOR5x0"))
              .catch( error => { console.error( error )});    
  
  zEditorA.addEventListener("blur", function () {console.log(this.innerHTML)});
})
();
(function calendarSetup() {
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
