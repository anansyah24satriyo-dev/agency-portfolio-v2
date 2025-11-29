import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// multer setup
const upload = multer({ dest: "uploads/" });

// cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

// upload endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'projects'
    });

    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// test
app.get('/', (req, res) => {
  res.send("Backend running...");
});

app.listen(5000, () => console.log('Server running on port 5000'));
