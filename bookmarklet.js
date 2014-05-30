(function(){
  javascript('//code.jquery.com/jquery-1.11.0.min.js');
  javascript('/client.js?' + (new Date().getTime()));

  function javascript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
})();
