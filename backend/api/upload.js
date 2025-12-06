import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    const file = files.file;

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: "portfolio_projects"
      });

      fs.unlinkSync(file.filepath);

      res.status(200).json({ url: result.secure_url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}
