(function(){
  var bustCache = (new Date().getTime());
  javascript('//code.jquery.com/jquery-1.11.0.min.js?' + bustCache)

  // Workaround to force wait until jQuery is added to page.
  setTimeout(function(){
    javascript('//localhost:8000/client.js?' + bustCache)
  }, 3000);

  function javascript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return true
  }
})();
