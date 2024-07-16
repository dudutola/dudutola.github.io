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
      <div className="group">
        <div className="userInfos">
          <label htmlFor="firstname">
            Firstname:
          </label>
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="messageContainer">
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message..."
            onChange={handleChange}
            required
          >
          </textarea>
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  )
};
