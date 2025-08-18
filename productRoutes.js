const express = require("express");
const ProductRouter = express.Router();

ProductRouter.get("/", (req, res) => {
  res.json([
    { id: 1, name: "shampoo" },
    { id: 2, name: "grocery" },
  ]);
});

ProductRouter.post("/", (req, res) => {
  const product = req.body;
  res.status(201).json({
    message: "Product created successfully",
    product,
  });
});

module.exports = ProductRouter;
