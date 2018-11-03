const express = require("express");
const path = require("path");

const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // Convertirá el cuerpo en un objeto JSON.

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/openwebinars'


mongoose.connect(mongoUri)

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"];

function getTime(req, res) {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = meses[date.getMonth()];
    res.send(day + "/" + month + "/" + year);
    console.log("El usuario ha pedido la hora")
}

app.get('/lmgtfy/:search', (req, res) => {
    var lGString = req.params.search;
   

var i = 0, strLength = lGString.length;
 
for(i; i < strLength; i++) {
 
    lGString = lGString.replace(" ", "+");
}
  
var url = "http://lmgtfy.com/?q=" + lGString;


    res.json({
      message: `Let me Google that for you: ${url}`
    })
  })

app.get("/fecha", getTime);

const apiRoutes = require('./api/routes/api') // Añádelo debajo de el require de Express.

app.get('/api/posts/', apiRoutes.loadPosts)
app.get('/api/posts/:id', apiRoutes.loadPost)
app.post('/api/posts/', apiRoutes.newPost)
app.put('/api/posts/', apiRoutes.updatePost) // No lleva parámetro id, ya que lo mandamos en el body.
app.delete('/api/posts/:id', apiRoutes.deletePost)


function handleError(err) {
    console.error(`[Error] ${err.message}`)
    console.error(err.stack)
}

app.on('error', (err) => handleError)
app.on('uncaughtException', (err) => handleError)
app.on('unhandledRejection', (err) => handleError)


app.listen(3000);
console.log("La app está funcionando");
