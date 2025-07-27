import React, { useState } from 'react';
import '../styles/Contact.css'; // Assuming you have a CSS file for styles

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const contactMethods = [
        {
            icon: "📧",
            title: "Email Us",
            description: "Send us an email anytime",
            value: "hello@company.com",
            link: "mailto:hello@company.com"
        },
        {
            icon: "📞",
            title: "Call Us",
            description: "Mon-Fri from 8am to 6pm",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: "💬",
            title: "Live Chat",
            description: "Chat with our support team",
            value: "Available 24/7",
            link: "#"
        },
        {
            icon: "📍",
            title: "Visit Us",
            description: "Come say hello at our office",
            value: "123 Business St, City, ST 12345",
            link: "#"
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Reset form and show success
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setShowSuccess(true);
                
                // Hide success message after 5 seconds
                setTimeout(() => setShowSuccess(false), 5000);
                
            } catch (error) {
                console.error('Failed to send message:', error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1 className="contact-title">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="contact-subtitle">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="contact-methods">
                <div className="container">
                    <div className="methods-grid">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="method-card">
                                <div className="method-icon">{method.icon}</div>
                                <h3 className="method-title">{method.title}</h3>
                                <p className="method-description">{method.description}</p>
                                <a href={method.link} className="method-value">
                                    {method.value}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2 className="form-title">Send Us a Message</h2>
                            <p className="form-description">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        {showSuccess && (
                            <div className="success-message">
                                <span className="success-icon">✅</span>
                                <div>
                                    <h4>Message Sent Successfully!</h4>
                                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        <span className="label-icon">👤</span>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                                        placeholder="Your full name"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && (
                                        <span className="error-message">
                                            <span className="error-icon">⚠️</span>
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        <span className="label-icon">📧</span>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && (
                                        <span className="error-message">
                                            <span className="error-icon">⚠️</span>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    <span className="label-icon">📝</span>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                                    placeholder="What's this about?"
                                    disabled={isSubmitting}
                                />
                                {errors.subject && (
                                    <span className="error-message">
                                        <span className="error-icon">⚠️</span>
                                        {errors.subject}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    <span className="label-icon">💬</span>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                                    placeholder="Tell us more about your inquiry..."
                                    rows="6"
                                    disabled={isSubmitting}
                                />
                                {errors.message && (
                                    <span className="error-message">
                                        <span className="error-icon">⚠️</span>
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <button 
                                type="submit"
                                className={`submit-button ${isSubmitting ? 'button-disabled' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <span className="button-icon">📤</span>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">How quickly do you respond?</h3>
                            <p className="faq-answer">
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Do you offer phone support?</h3>
                            <p className="faq-answer">
                                Yes! Our phone support is available Monday through Friday from 8am to 6pm EST.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Can I schedule a demo?</h3>
                            <p className="faq-answer">
                                Absolutely! Contact us to schedule a personalized demo of our platform.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Is there live chat support?</h3>
                            <p className="faq-answer">
                                Yes, our live chat is available 24/7 for immediate assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;