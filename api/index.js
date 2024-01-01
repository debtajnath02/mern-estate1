let express = require("express");
let router = require("./routes/user.route"); // Change this line
let mongoose = require("mongoose");
let dotenv = require("dotenv");
dotenv.config();
let app = express();
let cors = require("cors");
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected with mongoose");
  })
  .catch((err) => {
    throw err;
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use("/api", router); // Change this line