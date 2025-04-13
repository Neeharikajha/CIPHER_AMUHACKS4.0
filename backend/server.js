const express = require("express");
const dotenv = require("dotenv"); // Import dotenv
dotenv.config(); // Load environment variables from .env file
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transaction");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// Route imports
const testUserRoutes = require("./routes/testUser"); // Import your test user routes
const authRoutes = require("./routes/auth"); // Import your auth routes

app.use("/api/transaction", transactionRoutes);


// Use routes
app.use("/api/test", testUserRoutes); // Test user routes
app.use("/api/auth", authRoutes); // Auth routes

connectDB();

// Default route to check if API is running
app.get("/", (req, res) => {
  res.send("API is running...");
});



// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
