import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

// middelware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  // only start server after db is connected
  app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
  });
});

//mongodb+srv://mydh1502:EFI9VgwiG3gWJ5yA@cluster0.u2bkwmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
