let mysql = require ("mysql");
const config = require("../config");

let con = mysql.createConnection(config.db);

con.connect(function(err){
if (err) throw err;
console.log("Connected!");

let sql = 
    "CREATE TABLE IF NOT EXISTS mole (id_mole INT AUTO_INCREMENT PRIMARY KEY, link VARCHAR(255) NOT NULL, points INT NOT NULL, effects ENUM('isBomb','isJoker','isTime'))";

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
sql = "CREATE TABLE IF NOT EXISTS score (id_score INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, score INT NOT NULL, time TIME NULL)";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
});