import { DAO } from "./DAO.js"
import sqlite3 from "sqlite3"
import express from "express"

// open the database
let db = new sqlite3.Database('./db/bd_client_serveur.db');

// let sql = `SELECT * FROM MOCK_DATA`;

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// close the database connection
//var express = require('express')
const app = express()
app.use(express.json())
app.set('port', 3000)
console.log('Server listening on port', app.get('port'))
app.listen(app.get('port'))
app.get('/', function (_req, res) { 
  res.send('Hello world !')
})

app.get('/database', function (_req, res) {
  // let dao = new DAO(db)
  //  dao.read("first_name", "MOCK_DATA").then((result)=>{res.send(result)},reason => res.send("reason"))
  //.then(()=>res.send("eeeeeeeeeee"))
  
  //dao.create()
})

app.get('/add', function (_req, res) {
  let dao = new DAO(db)
  // dao.read(res,"first_name", "MOCK_DATA")
  // dao.create("MOCK_DATA" ,["id", "first_name", "last_name", "email", "gender", "ip_address"],["1002", 'VidO', 'Cuddehay', 'vcuddehayf0@reuters.com', 'Female', '154.135.168.221'])
  dao.create(["zoi","boi"]).then((result)=>{res.send(result)}, reason => res.send("reason"))
})

