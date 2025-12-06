import Busboy from "busboy";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const busboy = Busboy({ headers: req.headers });

  let fileBuffer = null;

  return new Promise((resolve, reject) => {
    const chunks = [];

    busboy.on("file", (fieldname, file) => {
      file.on("data", (data) => chunks.push(data));
      file.on("end", () => {
        fileBuffer = Buffer.concat(chunks);
      });
    });

    busboy.on("finish", () => {
      res.status(200).json({
        message: "File received",
        size: fileBuffer?.length || 0
      });
      resolve();
    });

    busboy.on("error", (err) => {
      console.error("Busboy error:", err);
      res.status(500).json({ error: "Upload failed" });
      reject(err);
    });

    req.pipe(busboy);
  });
}
