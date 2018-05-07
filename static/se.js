(function initializeCKEDITOR5 () 
{  
  var eInit = {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { modelElement: 'heading1', viewElement: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { modelElement: 'heading2', viewElement: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                      ]
                }
             };
    
  var zEditorA = document.getElementById("CKEDITOR5x0");
  InlineEditor.create(zEditorA, eInit).then(console.log("A")).catch( error => { console.error( error )});
  
  var zEditorB = document.getElementById("CKEDITOR5x1");
  zEditorB.addEventListener("dblclick", 
    function() {
       InlineEditor.create(zEditorB)
                   .then(console.log("B")).catch( error => { console.error( error )})
    }
   );
})
();
