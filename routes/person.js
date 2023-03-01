import express from "express"
import { DAO } from "../DAO.js"
import sqlite3 from "sqlite3"

// open the database
let db = new sqlite3.Database('db/bd_client_serveur.db');
const router = new express.Router()

router.get('/ressource/:table', function (req, res) {
    let dao = new DAO(db)
    const body = req.params
    let value=req.query.value
    dao.read(body.table, value).then((result)=>{
      res.status(201).send(result)
    }, reason => res.send(reason))
    .then(()=>{  
      console.log("Read done")
    })
})
  
router.get('/ressource/:table/:id', function (req, res) {
    let dao = new DAO(db)
    const body = req.params
    let value=req.query.value
    dao.read(body.table, value, body.id).then((result)=>{
      res.status(201).send(result)
    }, reason => res.send(reason))
    .then(()=>{  
      console.log("Read done")
    })
})

router.get('/ressource/:table/:id/:value', function (req, res) {
    let dao = new DAO(db)
    const body = req.params
    dao.read(body.table, body.value, body.id).then((result)=>{
      res.status(201).send(result)
    }, reason => res.send(reason))
    .then(()=>{  
      console.log("Read done")
    })
})

router.post('/ressource/:table', function (req, res) {
  let dao = new DAO(db)
  const body = req.params
  dao.create(db,body.table, req).then((result)=>{
    res.status(201).send(result)
  }, reason => res.send(reason))
  .then(()=>{  
    console.log("Add done")
  })
})

router.put('/ressource/:table/:id', function (req, res) {
  let dao = new DAO(db)
  const body = req.params
  dao.update(db,body.table, body.id, req, true).then((result)=>{
    res.status(201).send(result)
  }, reason => res.send(reason))
  .then(()=>{  
    console.log("Update done")
  })
})

router.patch('/ressource/:table/:id', function (req, res) {
  let dao = new DAO(db)
  const body = req.params
  dao.update(db,body.table, body.id, req).then((result)=>{
    res.status(201).send(result)
  }, reason => res.send(reason))
  .then(()=>{  
    console.log("Update done")
  })
})

router.delete('/ressource/:table/:id', function (req, res) {
  let dao = new DAO(db)
  const body = req.params
  dao.delete(db,body.table, body.id).then((result)=>{
    res.status(201).send(result)
    }, reason => res.send(reason))
    .then(()=>{   
      console.log("Delete done")
  })
})

export {router}