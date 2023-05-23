const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var PORT = process.env.PORT || 8080;

const server = http.Server(app).listen(PORT);

var urlencodedparser = bodyParser.urlencoded({extended:false});

app.use(express.static('Images'));
app.use(express.static('webpage'));

app.get("/", (req, res)=>{
    console.log("Hello world");
    res.sendFile(__dirname + "/webpage/signup.html");
});

app.post("/login", urlencodedparser, (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.password);
    res.send(req.body);
});