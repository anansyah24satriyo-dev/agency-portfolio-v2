import formidable from "formidable";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Parse gagal" });

      const upload = await cloudinary.v2.uploader.upload(files.file.filepath);

      return res.status(200).json({ url: upload.secure_url });
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
