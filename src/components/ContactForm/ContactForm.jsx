import { useState, useRef } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Referência para o primeiro campo com erro (para mover o foco)
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const validate = (name, value) => {
    let error = '';
    if (name === 'name' && value.length < 3) error = 'Name must be at least 3 characters.';
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) error = 'Please enter a valid email address.';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validação em tempo real
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validate('name', formData.name);
    const emailError = validate('email', formData.email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      // ACESSIBILIDADE: Move o foco para o primeiro campo com erro
      if (nameError) nameInputRef.current.focus();
      else if (emailError) emailInputRef.current.focus();
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="success-message" role="alert">
        <CheckCircle2 color="#2e7d32" size={48} />
        <h2>Thank you!</h2>
        <p>You've successfully subscribed to our newsletter.</p>
        <button onClick={() => setIsSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <section className="form-section">
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} noValidate>
        
        {/* Campo Nome */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="error-text" aria-live="polite">
              <AlertCircle size={16} /> {errors.name}
            </span>
          )}
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailInputRef}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="error-text" aria-live="polite">
              <AlertCircle size={16} /> {errors.email}
            </span>
          )}
        </div>

        <button type="submit" className="submit-btn">Subscribe Now</button>
      </form>
    </section>
  );
};

export default ContactForm;