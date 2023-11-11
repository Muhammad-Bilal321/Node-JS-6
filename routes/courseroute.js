const express = require("express");
const CourseController = require("../controllers/coursecontroller");
const AuthController = require("../controllers/AuthController");

const route = express.Router();

route.get("/", AuthController.protected,CourseController.get);
route.get("/:id", CourseController.getById);
route.post("/", CourseController.add);
route.delete("/:id", CourseController.del);

module.exports = route;
