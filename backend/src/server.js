import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middelware
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("server started on PORT:", PORT);
});

//mongodb+srv://mydh1502:EFI9VgwiG3gWJ5yA@cluster0.u2bkwmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
