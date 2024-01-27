import React from "react";

export default function Forms() {
  return (
    <div className="form">
      {/* fullname */}
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          id="name"
          placeholder="Full name"
          required
        />
        <label for="name" className="form-label">
          Full name
        </label>
      </div>
      {/* email address */}
      <div className="form-group">
        <input
          type="email"
          className="form-input"
          id="email"
          placeholder="Email address"
          required
        />
        <label for="email" className="form-label">
          Email address
        </label>
      </div>
      {/* message */}
      <div className="form-group">
        <textarea
          className="form-input text-input"
          id="message"
          placeholder="Enter message here"
          required
        />
        <label htmlFor="message" className="form-label">
          Enter message here
        </label>
      </div>
      {/* button */}
      <button class="btn">send</button>
    </div>
  );
}
