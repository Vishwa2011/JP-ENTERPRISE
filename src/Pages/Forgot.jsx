import React, { useState } from 'react'

const Forgot = () => {
  const [useMobile, setUseMobile] = useState(false); // toggle flag
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
    // Reset or redirect logic goes here
  };

  return (
    <>
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h1 className='h1'>Forgot your password?</h1>
      <hr />

      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
      )}

      {successMessage && (
        <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
      )}

      {/* Step 1: Email or Mobile input */}
      {!showOtpSection && !otpVerified && (
        <form onSubmit={handleSubmit} className='form'>
          <h3 className='h3'>{useMobile ? 'Enter your mobile number' : 'Enter your email address'}</h3>

          {useMobile ? (
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          ) : (
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          )}

          <div style={{ marginBottom: '10px' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setUseMobile(!useMobile);
                setEmail('');
                setMobile('');
                setErrorMessage('');
              }}
              style={{ fontSize: '14px', color: '#f53f85', textDecoration: 'underline' }}
            >
              {useMobile ? 'Forgot With Email?' : 'Forgot With Mobile Number?'}
            </a>
          </div>
<div style={{justifyContent:'center',display:'flex'}}>
    <button type="submit" className='button'>Send OTP</button>
</div>
        
        </form>
      )}

      {/* Step 2: OTP */}
      {showOtpSection && !otpVerified && (
        <form onSubmit={handleOtpSubmit} className='form'>
          <h3 className='h3'>Enter OTP</h3>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <div style={{justifyContent:'center',display:'flex'}}>

          <button type="submit" className='button'>Submit OTP</button>
          </div>
        </form>
      )}

      {/* Step 3: Password Reset */}
      {otpVerified && (
        <form onSubmit={handlePasswordReset} className='form'>
          <h3 className='h3'>Reset Your Password</h3>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '25px' }}
          />
          <div style={{justifyContent:'center',display:'flex'}}>
      <button type="submit" className='button'>Reset Password</button>
          </div>
          <div>
            <a
              href="/"
          
              style={{ fontSize: '14px', color: '#f53f85', textDecoration: 'underline' }}
            >
            Back To Home 
            </a>
          </div>
        </form>
       
      )}
    
    </div>
    </>
  
  );
};

export default Forgot;
