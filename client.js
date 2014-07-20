(function($, globals){

  console.log('loading client.js');

  $(function(){
    $('body').on('mouseup',
      function(e){
        var selection = null;
        var selectionText = null;

        if (globals.getSelection) {
          selection = globals.getSelection();
        } else if (globals.document.selection) {
          selection = globals.document.selection.createRange();
        }

        selectionText = selection.toString();

        if(selectionText !== ''){
          var targetElement = $(e.target);
          var entireSection = targetElement.html();
          var highlightedText = "<span class='cc-highlight'>"+selectionText+ "</span>";
          var highlightedSection = entireSection.replace(selectionText, highlightedText);

          targetElement.html(highlightedSection);

          var commentBox = $('.cc-box')
          commentBox.show();
          commentBox.find('form').on('submit', function(e) {
            e.preventDefault();
            var textArea = $(this).find('textarea');
            var comment = {
              description: textArea.val(),
              selectedText: selectionText
            }
            post(comment);
            commentBox.hide();
            textArea.val('');
          });
        }
      });
  });

  function post(data) {
    $.post('http://localhost:3000/comments', { comment: data }, function(response) {
      console.log(response);
    });
  }
}(jQuery, window));

