const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/script"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/test", function(request, response) {
  response.send({ test: "test" });
});

app.listen(3000);
