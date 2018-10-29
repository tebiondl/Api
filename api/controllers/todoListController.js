'use strict';

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre",
 "noviembre", "diciembre"];

function getTime(req, res){
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = meses[date.getMonth()];
  res.send(day+"/"+month+"/"+year);
}