import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Forms() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_dflzogh",
        "template_y10hk4k",
        e.target,
        "gOewoGMQ2mfi1lYfL"
      );
      alert("Form submitted successfully!");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Add onSubmit handler to the form */}
        {/* fullname */}
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder="Full name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form-label">
            Full name
          </label>
        </div>
        {/* email address */}
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder="Email address"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
        </div>
        {/* message */}
        <div className="form-group">
          <textarea
            className="form-input text-input"
            id="message"
            name="message"
            placeholder="Enter message here"
            value={formState.message}
            onChange={handleChange}
            required
          />
          <label htmlFor="message" className="form-label">
            Enter message here
          </label>
        </div>
        {/* button */}
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}
