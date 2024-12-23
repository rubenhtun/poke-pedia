import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={`contact-page ${theme}`}>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <section className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about Pokémon or suggestions for Poke Pedia? We'd
              love to hear from you! Fill out the form below or reach out to us
              directly.
            </p>
            <ul>
              <li>
                <i className="bi bi-envelope"></i> Email: info@pokepedia.com
              </li>
              <li>
                <i className="bi bi-telephone"></i> Phone: (123) 456-7890
              </li>
              <li>
                <i className="bi bi-geo-alt"></i> Address: 123 Poke Street,
                Kanto Region
              </li>
            </ul>
          </section>
          <section className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {formErrors.name && (
                  <span className="error">{formErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {formErrors.message && (
                  <span className="error">{formErrors.message}</span>
                )}
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>
        </div>
        <Link to="/" className="contact-back-link">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
