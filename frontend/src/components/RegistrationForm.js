import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bestTime, setBestTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      best_time: bestTime,
    };

    console.log('Data to submit:', formData);

    try {
      const response = await axios.post('http://localhost:8210/api/getdata', formData);
      console.log(response.data);
      alert('Data added successfully!');
      window.location.reload();
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('There was an error adding the data. Please try again.');
    }
  };

  return (
    <div className="registration-card">
      <div className="card-header">
        <h2 className="card-title">Registration Form</h2>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Best Time to Call</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="morning"
                  value="Morning"
                  checked={bestTime === 'Morning'}
                  onChange={(e) => setBestTime(e.target.value)}
                  required
                />
                <label htmlFor="morning">Morning</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="afternoon"
                  value="Afternoon"
                  checked={bestTime === 'Afternoon'}
                  onChange={(e) => setBestTime(e.target.value)}
                  required
                />
                <label htmlFor="afternoon">Afternoon</label>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
