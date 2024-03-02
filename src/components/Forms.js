import React, { useState } from "react";

export default function Forms() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="form">
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
      <button type="submit" className="btn" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}