// components/Contact.js
import React, { useState } from "react";
import "./Contact.css";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      alert("Lengkapi semua input!");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        createdAt: serverTimestamp(),
      });

      alert("Pesan terkirim!");
      setData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim pesan!");
    }
  };

  return (
<section id="contact" className="contact section">
  <h2>Contact Us</h2>

  <div className="contact-wrapper">
    
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={data.message} onChange={handleChange}></textarea>
      <button className="btn" type="submit">Send Message</button>
    </form>

    <div className="contact-image">
      <img src="./img/Hero.jpg" alt="Vector Contact" />
    </div>

  </div>
</section>
  );
};

export default Contact;
