const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/bd_client_serveur.db');

let sql = `SELECT * FROM MOCK_DATA WHERE gender = 'Female'`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

// close the database connection
db.close();
