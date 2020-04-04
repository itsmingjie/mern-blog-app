const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello backend, siap berpetualang??");
});

app.post("/user", (req, res) => {
  console.log("req.body");
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
