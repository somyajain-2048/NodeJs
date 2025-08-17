const express = require("express");
const bookrouter = express.Router();

const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 3, title: "Think Like a Monk", author: "Jay Shetty", year: 2020 },
  {
    id: 4,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    year: 1997,
  },
];

bookrouter.get("/", (req, res) => {
  const author = req.query.author;
  if (author) {
    const filterdata = books.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );
    res.json(filterdata);
  } else {
    res.json(books);
  }
});

bookrouter.get("/search", (req, res) => {
  const { year, title } = req.query;

  if (title && year) {
    const filterdata = books.filter((book) => {
      book.title.toLowercase() === title.toLowerCase() &&
        book.year === parseInt(year);
    });
    res.json(filterdata);
  }
  res.status(400).json({ message: "pls provide all details" });
});

bookrouter.post("/", (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "all fields are requireed" });
  }
  const newbook = {
    id: books.length + 1,
    title,
    author,
    year: parseInt(year),
  };

  books.push(newbook);
  res.status(200).json({
    message: "a new book created successfully",
    book: newbook,
  });
});

// module.exports = bookrouter;

// POST /books

// Adds a new book with title, author, and year from the request body.

// Return a success message along with the created book.

// BONUS

// Add a query param minYear in /books so it returns only books published after that year.
