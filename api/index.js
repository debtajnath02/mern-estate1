let express = require("express");

let mongoose = require("mongoose");
let dotenv = require("dotenv");
dotenv.config();
let app = express();
let cors = require("cors");
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conected with mongoose");
  })
  .catch((err) => {
    throw err;
  });
app.listen(3000, () => {
  console.log("ghftguyhg");
});

//client
