const http = require('http');
const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;

const server = http.Server(app).listen(PORT);

app.use(express.static(__dirname + '/webpage'));

app.get("/", (req, res)=>{
    console.log("Hello world");
    res.sendFile(__dirname + "/webpage/signup.html");
});
