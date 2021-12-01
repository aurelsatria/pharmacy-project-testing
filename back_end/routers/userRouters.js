const express = require("express");
const { userController } = require("../controllers");
const { auth } = require("../helper/authToken");
const routers = express.Router();

routers.post("/login", userController.getData);
routers.get("/getProfile/:id", userController.getProfile);
routers.post("/register", userController.addData);
routers.patch("/edit/:id", userController.changeProfile);
routers.patch("/verified", auth, userController.verification);
routers.patch("/change/:id", userController.changePassword);
routers.post("/reset-email", userController.resetEmailPass);
routers.post("/keep-login", userController.keepLogin);
routers.patch("/resetpass/:id", userController.resetPass);
routers.patch("/changePhoto/:id", userController.changePhoto);

module.exports = routers;
