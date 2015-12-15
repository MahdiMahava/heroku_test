var app = require('express').createServer();
app.get('/', function(req, res) {
  //res.send("<h1> Hello Anton!!!! </h1>");
  
  
  var pg = require('pg');
  var connection_string = 'postgres://mxzuyoxrjiarxk:zDcbCqPyCmEW2gvbv0cKj_KQrW@ec2-54-204-39-67.compute-1.amazonaws.com:5432/d78eqo5u517mq';
pg.connect(connection_string, function(err, client) {
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



app.get('/dbrequest', function(req, res) 
{
  //res.send("<h1> Hello Anton!!!! </h1>");
  

 
      res.send("Params = "+req + "<hr/> originalUrl = " + req.originalUrl + " <hr/> params = " req.params);


});


app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});
