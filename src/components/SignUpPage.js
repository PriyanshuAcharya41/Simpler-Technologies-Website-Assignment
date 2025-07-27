// SignUpPage.js
import React, { useState } from 'react';
import { addUser, emailExists, getAllUsers } from '../utils/userData';
import '../styles/SignUpPage.css'; // Assuming you have a CSS file for styles

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [users, setUsers] = useState(getAllUsers());

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

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (emailExists(formData.email)) {
      newErrors.email = 'This email is already registered';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add new user to userData
      const newUser = addUser({
        name: formData.fullName.trim(),
        email: formData.email.toLowerCase().trim()
      });
      
      // Update local users state
      setUsers(getAllUsers());
      
      // Reset form and show success
      setFormData({
        fullName: '',
        email: '',
        password: ''
      });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
      
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="signup-container">
      <div className="background-pattern"></div>
      
      <div className="signup-form-wrapper">
        <div className="signup-header">
          <div className="signup-logo">
            <div className="logo-icon floating-icon">✨</div>
          </div>
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join our community and get started today</p>
        </div>

        {showSuccess && (
          <div className="success-message success-animation">
            <span className="success-icon">✅</span>
            Account created successfully! Welcome aboard!
          </div>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              <span className="label-icon">👤</span>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-input ${errors.fullName ? 'input-error' : ''}`}
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <span className="error-message">
                <span className="error-icon">⚠️</span>
                {errors.fullName}
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
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">
                <span className="error-icon">⚠️</span>
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <span className="label-icon">🔒</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              placeholder="Create a strong password"
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="error-message">
                <span className="error-icon">⚠️</span>
                {errors.password}
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
                Creating Account...
              </>
            ) : (
              <>
                <span className="button-icon">🚀</span>
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p className="footer-text">
            Already have an account? 
            <span className="footer-link"> Sign in here</span>
          </p>
        </div>

        <div className="user-list">
          <h3 className="user-list-title">Registered Users ({users.length})</h3>
          <div className="user-container">
            {users.map(user => (
              <div key={user.id} className="user-card">
                <span className="user-avatar">{user.name.charAt(0)}</span>
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
