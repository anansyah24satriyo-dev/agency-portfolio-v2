export async function uploadImageToServer(file) {
  // 1️⃣ HARD GUARD ENV (INI PENTING)
  tellIfEnvMissing();

  // 2️⃣ VALIDASI FILE
  if (!file) throw new Error("File tidak ditemukan");
  if (!file.type.startsWith("image/")) {
    throw new Error("File harus berupa gambar");
  }

  // 3️⃣ BUILD FORMDATA
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_PRESET
  );

  // 4️⃣ REQUEST KE CLOUDINARY
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  // 5️⃣ HANDLE RESPONSE
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Upload gagal");
  }

  return data.secure_url;
}

/* ================= HELPER ================= */

function tellIfEnvMissing() {
  if (
    !process.env.REACT_APP_CLOUDINARY_CLOUD ||
    !process.env.REACT_APP_CLOUDINARY_PRESET
  ) {
    throw new Error(
      "ENV Cloudinary belum terdeteksi. Pastikan .env & restart server."
    );
  }
}
