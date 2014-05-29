(function($, globals){

  //console.log('loading client.js');

  $(function(){
    $('body').on('mouseup',
      function(e){
        var selection;

        if (globals.getSelection) {
          selection = globals.getSelection();
        } else if (globals.document.selection) {
          selection = globals.document.selection.createRange();
        }

        if(selection.toString() !== ''){
          alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
        }
      });
  });
}(jQuery, window))

