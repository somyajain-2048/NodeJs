const express = require("express");

const userRouter = express.Router();

const users = [
  { id: 1, name: "ram", role: "user" },
  { id: 2, name: "shyam", role: "admin" },
];
userRouter.get("/", (req, res) => {
  res.json(users);
});

userRouter.get("/filter", (req, res) => {
  const role = req.query.role;
  if (role) {
    const filterdata = users.filter((user) => user.role === role);
    res.json(filterdata);
  } else {
    res.json(users);
  }
});
userRouter.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({
    message: "User created successfully",
    user,
  });
});

module.exports = userRouter;
