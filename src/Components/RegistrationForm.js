
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className={`form-control ${errors.username && 'is-invalid'}`}
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={`form-control ${errors.email && 'is-invalid'}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={`form-control ${errors.password && 'is-invalid'}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <button type="submit" className="btn btn-grad mt-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
