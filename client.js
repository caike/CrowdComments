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
          var description = prompt('Insert your comment:');
          var comment = {
            description: description,
            selectedText: selection.toString(),
          }
          post(comment);
        }
      });
  });

  function post(data) {
    $.post('http://localhost:3000/comments', { comment: data }, function(response) {
      console.log(response);
    });
  }
}(jQuery, window))

