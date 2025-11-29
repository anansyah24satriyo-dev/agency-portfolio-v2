import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { uploadImageToServer } from ".././utils/uploadImage";
import "../admin/ProjectAdd.css";

export default function ProjectAdd() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Website");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [link, setLink] = useState("");                // <--- NEW
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !thumbnailFile) {
      alert("Title dan thumbnail wajib diisi.");
      return;
    }

    try {
      // 1. Upload thumbnail → Cloudinary
      setUploadProgress(10);
      const thumbnailUrl = await uploadImageToServer(thumbnailFile);

      // 2. Upload gallery
      const galleryUrls = [];
      let progressStep = 60 / Math.max(galleryFiles.length, 1);
      let currentProgress = 20;

      for (let file of galleryFiles) {
        const url = await uploadImageToServer(file);
        galleryUrls.push(url);
        currentProgress += progressStep;
        setUploadProgress(Math.round(currentProgress));
      }

      setUploadProgress(85);

      // 3. Save metadata ke Firestore
      await addDoc(collection(db, "projects"), {
        title,
        category,
        shortDesc,
        longDesc,
        link,        // <--- NEW
        thumbnailUrl,
        gallery: galleryUrls,
        status: "published",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setUploadProgress(100);
      alert("Project berhasil dibuat");
      navigate("/admin/projects");

    } catch (err) {
      console.error(err);
      alert("Upload gagal: " + err.message);
    }
  };

  return (
    <div className="project-add-container">
  <h2>Add New Project</h2>

  <form className="project-form" onSubmit={handleSubmit}>

    <div className="form-group">
      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Category</label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Website</option>
        <option>Video</option>
        <option>Photo</option>
        <option>Design</option>
      </select>
    </div>

    <div className="form-group">
      <label>Short Description</label>
      <input value={shortDesc} onChange={e => setShortDesc(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Long Description</label>
      <textarea rows={6} value={longDesc} onChange={e => setLongDesc(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Project Link (optional)</label>
      <input value={link} onChange={e => setLink(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Thumbnail (required)</label>
      <input type="file" accept="image/*" onChange={e => setThumbnailFile(e.target.files[0])} />
    </div>

    <div className="form-group">
      <label>Gallery (optional)</label>
      <input type="file" multiple accept="image/*" onChange={e => setGalleryFiles(Array.from(e.target.files))} />
    </div>

    <button type="submit" className="project-submit-btn">Save Project</button>

    {uploadProgress > 0 && (
      <span className="progress-text">{uploadProgress}%</span>
    )}

  </form>
</div>
  );
}
