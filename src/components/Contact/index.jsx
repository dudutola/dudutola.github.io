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

  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (formData.firstName.trim().length < 2) {
      errors.firstName = 'Le prénom doit contenir au moins 2 caractères.';
      isValid = false;
    }

    if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Le nom doit contenir au moins 2 caractères.';
      isValid = false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = 'L\'adresse email est invalide.';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
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
          Prénom:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstName"
          value={formData.firstName}
          placeholder="Votre prénom"
          onChange={handleChange}
          required
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label htmlFor="lastname">
          Nom:
        </label>
        <input
          type="text"
          id="lastname"
          name="lastName"
          value={formData.lastName}
          placeholder="Votre nom"
          onChange={handleChange}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <label htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Votre email"
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="messageContainer">
        <label htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder="Message..."
          onChange={handleChange}
          required
        >
        </textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
    </div>
    <button className="btn" type="submit">Envoyer</button>
  </form>
  )
};
