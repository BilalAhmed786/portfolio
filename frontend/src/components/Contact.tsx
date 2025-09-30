import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("https://portfolio-ydi2.onrender.com/api/contact", formData);

      if (res.data.success) {
        setStatus(res.data.success);
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-gray-600">Interested in working together? Let’s talk!</p>
      
      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
       
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md h-32"
      
        ></textarea>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </section>
  );
};

export default Contact;
