// main server file
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Example API route
app.get("/api/users", (req, res) => {
  res.json({
    name: "John",
    age: 25
  });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

