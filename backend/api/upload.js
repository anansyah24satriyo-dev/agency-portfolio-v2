import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const upload = await cloudinary.v2.uploader.upload(file, {
      folder: "portfolio",
    });

    return res.status(200).json({ url: upload.secure_url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Upload failed" });
  }
}
