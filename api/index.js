let express = require("express");
let userRouter = require("./routes/user.route"); // Change this line
let mongoose = require("mongoose");
let authRouter = require("./routes/auth.route")
let dotenv = require("dotenv");
dotenv.config();
let app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json())
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
app.use("/api", userRouter); // Change this line

app.use("/signup", authRouter)