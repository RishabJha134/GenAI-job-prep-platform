const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
  const token = req.cookies.token;

  const isTokenBlackList = await tokenBlackListModel.findOne({
    token,
  });

  if (isTokenBlackList) {
    return res.status(401).json({
      message: "token is invalid blacklisted",
    });
  }

  if (!token) {
    return res.status(401).json({
      message: "Token Not Provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token.",
    });
  }
}

module.exports = { authUser };
