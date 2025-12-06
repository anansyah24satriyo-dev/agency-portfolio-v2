import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const file = req.body.file; // Base64
    if (!file) return res.status(400).json({ error: "No file provided" });

    const result = await cloudinary.uploader.upload(file, {
      folder: "projects",
    });

    res.status(200).json({ url: result.secure_url });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
