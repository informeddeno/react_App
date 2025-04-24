const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app (build directory)
app.use(express.static(path.join(__dirname, "build")));

// Example of a valid dynamic route
app.get("/api/:id", (req, res) => {
  res.json({ message: `You requested item with ID: ${req.params.id}` });
});

// Handles any requests that don't match the static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
