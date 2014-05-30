var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});


var comments = app.route('/comments');

comments.post(function(req, res) {
  res.json(201, { comment: req.param('comment') });
});

app.listen(3000);

