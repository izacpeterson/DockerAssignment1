const express = require("express");
const app = express();
const fs = require("fs");

let data = JSON.parse(fs.readFileSync("./Izacfile").toString());
console.log(data.msg);

app.get("/", (req, res) => {
  console.log(`User: ${req.query.name || "anon"} connected`);
  if (req.query.name) res.send("Hello " + req.query.name);
  else res.send("Who are you?");
});

app.listen(8080, () => {
  console.log("Server Listening on 8080");
});
