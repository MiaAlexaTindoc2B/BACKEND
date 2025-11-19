import express from "express";
import "dotenv/config.js";
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";
import UserRoutes from "./routers/UserRoutes.js";
import cors from "cors";


const app = express();
//Enable cors to frontend
let corsOptions = {
  origin: process.env.ORIGIN
}

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// This is used to log the request on the console
app.use((req, res, next)=>{
  console.log(req.path, req.method);
  next();
})

// Routes
app.use("/book", bookRoutes);
app.use("/tbl_student", studentRoutes);
app.user("/tbl_user", UserRoutes);

// Start server
app.listen(port, () => {
  console.log('✅ Server running on port ${port}...');
});