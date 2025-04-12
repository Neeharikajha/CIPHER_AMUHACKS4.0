const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // ✅ Correct path

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const testUserRoutes = require("./routes/testUser");
app.use("/api/test", testUserRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const aiRoutes = require("./routes/ai"); // <-- Add this line
app.use("/api/ai", aiRoutes); // <-- Use the AI routes



connectDB(); // ✅ This runs the connection

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
