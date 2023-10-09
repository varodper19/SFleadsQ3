const http = require('http')


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const production  = 'https://examplePage.com';
const development = 'http://localhost:3000/';
const secret = (process.env.NODE_ENV ? production : development);
const clientID = (process.env.NODE_ENV ? production : development);
const issuerBaseURL = (process.env.NODE_ENV ? production : development);
const url = (process.env.NODE_ENV ? production : development);


const server = http.createServer( (req, res ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Este es mi primer servidor en node!\n')
})


app.listen(port, () => {
    console.log("Application started and Listening on port 3000");
  });
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
