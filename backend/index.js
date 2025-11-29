import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer temporary storage
const upload = multer({ storage: multer.memoryStorage() });

// =========================
// UPLOAD ROUTE
// =========================
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "projects",
    });

    return res.json({ url: result.secure_url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Upload failed" });
  }
});

// =========================
// START SERVER
// =========================
app.listen(5000, () => console.log("Backend berjalan di port 5000"));
