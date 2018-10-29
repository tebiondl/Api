const express = require("express");
const path = require("path");

const app = express();

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

app.listen(3000);
console.log("La app está funcionando");
