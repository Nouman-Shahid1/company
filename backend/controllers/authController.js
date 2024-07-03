const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const updateEnv = require("../utils/updateEnv");
require("dotenv").config(); // Ensure dotenv is configured

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body; // Include username

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    name,
    email,
    username, // Ensure username is included here
    password: hashedPassword,
  });

  if (user) {
    const token = generateToken(user._id);
    updateEnv("JWT_TOKEN", token);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username, // Include username in response
      token: token,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user._id);
    updateEnv("JWT_TOKEN", token);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username, // Include username in response
      token: token,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

module.exports = { registerUser, loginUser };
