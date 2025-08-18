// const express = require("express");
// const app = express();

// const users = [
//   { id: "1", name: "Ram" },
//   { id: "2", name: "Shyam" },
// ];
// const books = [
//   { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
//   { id: 2, title: "Atomic Habits", author: "James Clear", year: 2018 },
//   { id: 3, title: "Think Like a Monk", author: "Jay Shetty", year: 2020 },
//   {
//     id: 4,
//     title: "The Monk Who Sold His Ferrari",
//     author: "Robin Sharma",
//     year: 1997,
//   },
// ];

// app.get("/users/:userId/books/:bookId", (req, res) => {
//   res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
// });

// // app.get("/users/:userId/books/:bookId", (req, res) => {
// //   const id = req.params.id;
// //   const user = users.find((u) => u.id === id);

// //   if (user) {
// //     res.send(`user id : ${req.params.userId},
// // 			books id :${req.params.bookId};

// // 			`);
// //   } else {
// //     res.status(404).send("user not foind");
// //   }
// // });

// app.listen(3000, () => console.log("Server started"));

const express = require("express");
const router = express.Router();

const app = express();
const movies = [
  { id: 1, title: "Inception", year: 2010, genre: "sci-fi" },
  { id: 2, title: "The Dark Knight", year: 2008, genre: "action" },
  { id: 3, title: "Interstellar", year: 2014, genre: "sci-fi" },
  { id: 4, title: "Tenet", year: 2020, genre: "sci-fi" },
];

app.get("/", (req, res) => {
  const { genre } = req.query();

  if (genre) {
    const filtermovies = movies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
    return res.status(200).json(filtermovies);
  }
  res.send(movies);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id === parseInt(id));
  if (movie) {
    res.json("found movie", movie);
  } else {
    res.status(401).send("nomovie found witht this id");
  }
});

app.post("/", (req, res) => {
  const { id, title, year, genre } = req.body;
  if (!id || !title || !year || !genre) {
    return res.send(400).send("all fields are required");
  }

  movies.push({ id, title, year, genre });
  res.status(201).json({
    message: "movie added succesfully",
    movies,
  });
});

app.listen(3000, () => {
  console.log("server started");
});
