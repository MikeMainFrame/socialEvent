(function initializeCKEDITOR5 () 
{  
  var zEditorA = document.getElementById("#CKEDITOR5x0");
  zEditorA.addEventlistener("dblclick", 
    function() {
       InlineEditor.create(zEditorA).then(console.log("A")).catch( error => { console.error( error )})
               }
                           );
}
()
);
