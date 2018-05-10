(function initializeCKEDITOR5 () {
  
  var zEditorA = document.getElementById("CKEDITOR5x0");
  
  InlineEditor.create(zEditorA)
              .then(console.log("CKEDITOR5x0"))
              .catch( error => { console.error( error )});
    
  var zEditorB = document.getElementById("CKEDITOR5x1");
  
  InlineEditor.create( zEditorB )
              .then(console.log("CKEDITOR5x1"))
              .catch( error => { console.error( error )});
  
  zEditorA.addEventListener("blur", function () {console.log(this.innerHTML)});

})
();
