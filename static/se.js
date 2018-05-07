(function initializeCKEDITOR5 () 
{  
  var zEditorA = document.getElementById("CKEDITOR5x0");
  zEditorA.addEventListener("dblclick", 
    function() {
       InlineEditor.create(zEditorA)
                   .then(console.log("A"))
                   .catch( error => { console.error( error )})
               }
   );
  var zEditorB = document.getElementById("CKEDITOR5x1");
  zEditorB.addEventListener("dblclick", 
    function() {
       InlineEditor.create(zEditorB)
                   .then(console.log("B"))
                   .catch( error => { console.error( error )})
               }
   );
})
();
