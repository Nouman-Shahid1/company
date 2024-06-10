// middleware/authenticateToken.js
const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    // Check if the token is blacklisted
    const blacklistedToken = await Token.findOne({ token });
    if (blacklistedToken) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = authenticateToken;
