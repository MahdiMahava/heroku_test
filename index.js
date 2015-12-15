var app = require('express').createServer();
app.get('/', function(req, res) {
  res.send("<h1> Hello Anton!!!! </h1>");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});
