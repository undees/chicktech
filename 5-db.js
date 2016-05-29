// npm install sequelize pg
//
// install Postgres
//
// connect to Postgres and run these commands in psql:
//   CREATE DATABASE hello;
//
//   \c hello
//
//   CREATE TABLE movies(
//     title varchar(80),
//     year  integer
//   );
//
//   INSERT INTO movies(title, year) VALUES('Clue', 1985);
//
// edit postgres://... connection string below

require('newrelic');

var http      = require('http');
var Sequelize = require('sequelize');
var db        = new Sequelize('postgres://USERNAME@localhost:5432/hello');

http.createServer(function (req, res) {
  db.query('SELECT title FROM movies LIMIT 1').then(function(results) {
    var title = results[0][0].title;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello from Node! Here is a movie title: ' + title);
  });
}).listen(3000);
