export const uploadImageToServer = async (file) => {
  const base64 = await toBase64(file);

  const res = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ file: base64 }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error || "Upload gagal");

  return data.url;
};

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
