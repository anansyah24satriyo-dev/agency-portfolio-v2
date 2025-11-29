export const uploadImageToServer = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:5000/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload gagal");
  }

  const data = await res.json();
  return data.url; // URL dari Cloudinary
};
