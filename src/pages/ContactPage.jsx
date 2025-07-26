import { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const res = await axios.post("http://localhost:3000/api/contact/send", formData);
      setFeedback({
        type: "success",
        message: res.data.message || "Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.response?.data?.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full border rounded px-4 py-2 h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback.message && (
          <p
            className={`text-sm mt-2 ${
              feedback.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactPage;
