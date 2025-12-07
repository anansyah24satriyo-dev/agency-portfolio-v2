import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// =========================
// CLOUDINARY CONFIG
// =========================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// =========================
// MULTER TEMP STORAGE
// =========================
const upload = multer({ storage: multer.memoryStorage() });

// =========================
// UPLOAD ROUTE
// =========================
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "projects",
    });

    return res.json({ url: result.secure_url });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
});

// =========================
// ROOT ROUTE (OPTIONAL)
// =========================
app.get("/", (req, res) => {
  res.send("Backend API is running ✔️");
});

// =========================
// START SERVER (IMPORTANT FOR RENDER)
// =========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend berjalan di port ${PORT}`);
});
