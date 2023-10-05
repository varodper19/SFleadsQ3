const http = require('http')

const hostname = '127.0.0.1'
const port = 3000
const express = require("express");
const app = express();


const server = http.createServer( (req, res ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Este es mi primer servidor en node!\n')
})


app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
