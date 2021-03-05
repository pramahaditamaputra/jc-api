const express = require("express");
const routers = express.Router();
require("../config/connection");
const User = require("../model/User");

routers.get("/users", async (req, res) => {
  const users = await User.find();
  if (users.length > 0) {
    res.send({
      status: "success",
      message: "list users has been found",
      data: users,
    });
  } else {
    res.send({
      status: "failed",
      message: "list users not found!",
    });
  }
});

routers.get("/user/:type/:value", async (req, res) => {
  const type = req.params.type;
  const value = req.params.value;
  const users = await User.find({
    [type]: value,
  });
  if (users.length > 0) {
    res.send({
      status: "success",
      message: "User Found!",
      data: users,
    });
  } else {
    res.send({
      status: "failed",
      message: "User Not Found!",
    });
  }
});

routers.post("/user", async (req, res) => {
  const newUser = new User();
  const { name, email, phone, address } = req.body;
  newUser.name = name;
  newUser.email = email;
  newUser.phone = phone;
  newUser.address = address;
  const insert = await newUser.save();
  res.send({
    status: "success",
    message: "New User has been created!",
    data: insert,
  });
});

module.exports = routers;
