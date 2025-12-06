export const uploadImageToServer = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Upload gagal");
  }

  const data = await res.json();
  return data.url; // URL Cloudinary
};
