const User = require("../models/user.model");
let bcryptjs = require("bcryptjs");
const errorHandeler = require("../utils/error");
let jwt = require("jsonwebtoken");
let signUp = async (req, res, next) => {
  let { username, email, password } = req.body;
  let hashedPassword = bcryptjs.hashSync(password, 10);
  password = hashedPassword;
  let newUser = new User({ username, email, password: hashedPassword });
  console.log(req.body, hashedPassword);
  console.log(hashedPassword);
  try {
    await newUser.save();
    res.status(201).json("user created successfylly");
  } catch (error) {
    next(error);
  }
};

let signIn = async (req, res, next) => {
  let { username, email, password } = req.body;
  try {
    let validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandeler(404, "user not found"));
    let validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandeler(401, "invalide password"));
    let token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    let { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
let google = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      let { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      let generatedPasseord =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      let hashedPassword = bcryptjs.hashSync(generatedPasseord, 10);
      let newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      let { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = signUp;
module.exports.signIn = signIn;
module.exports.google = google;
