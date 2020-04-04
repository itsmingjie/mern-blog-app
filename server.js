const express = require("express");
require("dotenv").config(); //untuk load environment variabel
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");

app.use(passport.initialize());
require("./middleware/passport")(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Koneksi ke mongoDB berhasil"))
  .catch(err => console.log("error tuh"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

app.use("/api/users/", require("./routes/api/user"));
app.use("/api/posts/", require("./routes/api/post"));
