let mysql = require ("mysql");


// Prepare the connection to the database named "dbTest"
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbTaupe"
});

// Tries to connect
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // If it works, insert 4 new rows inside the characters table
  let sql = "INSERT INTO mole (id_mole, link, points, effects) VALUES ?";
  let values = [
    ["","classique","10", ""],
    ["", "medium","30" ,""],
    ["", "royal", "50" , ""],
    ["", "", "", ('true', 'true', '10')]

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

// If it works, insert 4 new rows inside the characters table
let sql = "INSERT INTO score (id_score, name, score, time) VALUES ?";
let values = [
  ["", "","", ""],

];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
