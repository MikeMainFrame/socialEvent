(function initializeCKEDITOR5 () 
{
  
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  
  var zEditorA = document.getElementById("CKEDITOR5x0");
  InlineEditor.create(zEditorA)
              .then(console.log("CKEDITOR5x0"))
              .catch( error => { console.error( error )});
    
  var zEditorB = document.getElementById("CKEDITOR5x1");
  
ClassicEditor
    .create( zEditorB )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );
})
();
