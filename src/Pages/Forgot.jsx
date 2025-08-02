import React, { useState } from 'react';


const Forgot = () => {
  const [useMobile, setUseMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (useMobile) {
      if (!mobile) {
        setErrorMessage('Please enter your mobile number');
        return;
      }
      setErrorMessage('');
      setShowOtpSection(true);
    } else {
      if (!email) {
        setErrorMessage('Please enter your email');
        return;
      }
      setErrorMessage('');
      setShowOtpSection(true);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setErrorMessage('');
      setOtpVerified(true);
    } else {
      setErrorMessage('Invalid OTP. Please try again.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    setErrorMessage('');
    setSuccessMessage('Password reset successful!');
  };

  return (
    <div className="forgot-page">
      <div className="form-container">
        <h2>Reset Your Password</h2>
        <p className="subtext">Time for a fresh start! Go ahead and set a new password.</p>

        {errorMessage && <div className="error-text">{errorMessage}</div>}
        {successMessage && <div className="success-text">{successMessage}</div>}

        {/* Step 1 */}
        {!showOtpSection && !otpVerified && (
          <form onSubmit={handleSubmit} className="form">
            <input
              type={useMobile ? 'tel' : 'email'}
              placeholder={useMobile ? 'Enter your mobile number' : 'Enter your email address'}
              value={useMobile ? mobile : email}
              onChange={(e) =>
                useMobile ? setMobile(e.target.value) : setEmail(e.target.value)
              }
              required
            />

            <a
              href="#"
              className="toggle-link"
              onClick={(e) => {
                e.preventDefault();
                setUseMobile(!useMobile);
                setEmail('');
                setMobile('');
                setErrorMessage('');
              }}
            >
              {useMobile ? 'Forgot With Email?' : 'Forgot With Mobile Number?'}
            </a>

            <button type="submit" className="form-button">Send OTP</button>
          </form>
        )}

        {/* Step 2 */}
        {showOtpSection && !otpVerified && (
          <form onSubmit={handleOtpSubmit} className="form">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="form-button">Submit OTP</button>
          </form>
        )}

        {/* Step 3 */}
        {otpVerified && (
          <form onSubmit={handlePasswordReset} className="form">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="form-button">Save Changes</button>
            <p className="login-link">
              Already part of the family? <a href="/">Log in here.</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Forgot;