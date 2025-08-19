import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express()

app.use("/api/notes", notesRoutes)

app.listen(5001, () => {
    console.log("server started on PORT: 5001")
})

//mongodb+srv://mydh1502:EFI9VgwiG3gWJ5yA@cluster0.u2bkwmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0