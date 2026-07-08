// main server file
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running...");
});



// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

