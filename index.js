
import express from "express"
import { router } from "./routes/person.js"

const app = express()
app.use(express.json())

app.set('port', 3000)
console.log('Server listening on port', app.get('port'))
app.listen(app.get('port'))

app.get('/', function (req, res) { 
  res.send('API RESTful')
})

app.use(router) 
