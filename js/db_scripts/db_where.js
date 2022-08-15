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
  con.query("SELECT * FROM Tutorias WHERE address = 'dakafu'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});