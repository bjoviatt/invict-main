const express = require("express");
const { addOne, getInfo } = require("./db/mongo");

const PORT = 8080;

const app = express();

app.get("/", addOne, (req, res) => {
  res.send(`done`);
});

app.get("/weather", getInfo, (req, res) => {
  if (req.allVal.length < 1) {
    return res.send("no info");
  }
  res.send(req.allVal);
});

app.listen(PORT, () => {
  console.log(`Server is up on Port: ${PORT}`);
});
