const userModel = require("../models//user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../models/blacklist.model");

async function registerUserController(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please provide username, email and password.",
      });
    }

    const isUserOrEmailExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    console.log(isUserOrEmailExist);

    if (isUserOrEmailExist) {
      return res.status(400).json({
        message: "User or email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 11);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error in registering the user" + error);
  }
}

async function loginUserController(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      res.status(400).json({
        message: "please send email and password",
      });
    }

    const user = await userModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(400).json({
        message: "email id is not registered for this user",
      });
    }

    console.log(user);

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({
        message: "password is not valid",
      });
    }

    console.log(isPassword);

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);
    res.status(200).json({
      message: "user logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error in user login" + error);
  }
}

async function logoutUserController(req, res) {
  const token = req.token;

  if (!token) {
  return res.status(401).json({
    message: "No token found",
  });
}

  const exists = await tokenBlackListModel.findOne({ token });

  if (!exists) {
    await tokenBlackListModel.create({ token });
  }
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully",
  });
}

async function getMeController(req, res) {
  const user = await userModel.findById(req.user.id);
  console.log("user from the getmecontroller"+user);
  res.status(200).json({
    message: "user details fetched successfully ",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
};
