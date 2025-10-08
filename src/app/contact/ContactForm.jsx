"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      console.log("start");
      const res = await fetch(
        "https://www.primepacificconsultancy.com.au/php/contact-form.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      console.log("res", res);
      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      const data = await res.json();
      if (data.success) {
        setSuccess("Your message has been sent successfully.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        console.log(data);
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-lg-12  ">
          <div className="form-floating">
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="Phone"
              required
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="phone">Your Phone</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
              style={{ height: 160 }}
              required
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>
        {error && (
          <div className="col-12">
            <div className="alert alert-danger">{error}</div>
          </div>
        )}
        {success && (
          <div className="col-12">
            <div className="alert alert-success">{success}</div>
          </div>
        )}
        <div className="col-12">
          <button
            className="btn btn-primary w-100 py-3"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
