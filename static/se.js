(function initializeCKEDITOR5 () 
{  
ClassicEditor
    .create( document.querySelector( '#CKEDITOR5x0' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { modelElement: 'heading1', viewElement: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { modelElement: 'heading2', viewElement: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );
  
  var zEditorB = document.getElementById("CKEDITOR5x1");
  zEditorB.addEventListener("dblclick", 
    function() {
       InlineEditor.create(zEditorB)
                   .then(console.log("CKEDITOR5x1")).catch( error => { console.error( error )})
    }
   );
})
();
