var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT name, address FROM Tutorias", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[16].address);
  });
});