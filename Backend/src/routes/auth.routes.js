const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// public routes
authRouter.post("/register", authController.registerUserController);
authRouter.post("/login", authController.loginUserController);
authRouter.get("/logout", authController.logoutUserController);

// private routes
authRouter.post(
  "/logout",
  authMiddleware.authUser,
  authController.logoutUserController,
);
authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
