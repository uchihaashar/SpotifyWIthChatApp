import dotenv from "dotenv";
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors"

import { connectDB } from "./lib/db.js";

import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/song.routes.js";
import albumRoutes from "./routes/album.routes.js";
import stateRoutes from "./routes/state.routes.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;
app.use(cors({
  origin : "http://localhost:3000",
  credentials : true
}))


app.use(express.json()); // to parse req.body
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      files: 10 * 1024 * 1024, // 10MB maximum file size
    },
  })
);

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/state", stateRoutes);
 


app.use((err, req, res, next) => {
    res.status(500).json({ message :  process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message });
})




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  connectDB();
});



// socket io implementation 