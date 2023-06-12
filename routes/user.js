const express = require('express');
const userController = require('../controller/user.js');
const router = express.Router();

router
  .post("/", userController.createUser)
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getuser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;



/*
 /products   ---> /    => *****isliye kiya kyoki ab mera router independent h products se !!
 
*/