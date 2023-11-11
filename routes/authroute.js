const express = require("express");
const AuthController = require("../controllers/AuthController");
const route = express.Router();

route.post("/signup", AuthController.signUp);
route.post("/login", AuthController.login);

module.exports = route;
