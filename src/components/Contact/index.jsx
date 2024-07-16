import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../../styles/components/_contact.scss";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_xaqhbdf', 'template_p09ouya', event.target, 'ZWW_83nzAaY3xAqS9')
      .then((result) => {
        alert("Message sent successfully!");

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      },
      (error) => {
        console.error("Error sending message:", error.text);
        alert("Error sending message. Please try again later.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">
        Firstname:
      </label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="lastname">
        Lastname:
      </label>
      <input
        type="text"
        id="lastname"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">
        Email:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">
        Message:
      </label>
      <textarea
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      >
      </textarea>
      <button type="submit">Send</button>
    </form>
  )
};
