var app = require('express').createServer();
app.get('/', function(req, res) {
  //res.send("<h1> Hello Anton!!!! </h1>");
  
  
  var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
      res.send("<h1> Hello Anton!!!! </h1><hr/>" + JSON.stringify(row));
    });
});



});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});
