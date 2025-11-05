import express from "express";
import "dotenv/config.js";
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/book", bookRoutes);
app.use("/tbl_student", studentRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}...`);
});
