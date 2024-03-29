import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import lockImage from './lock-image.png'; // Make sure to replace with the path to your lock image

const clientId = "835751562930-e9d0dn6c3ncorlnk84kbapo79oiogu77.apps.googleusercontent.com";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // Handle login success by storing the user data or navigating to another page, etc.
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // Handle login failure, such as displaying a notification to the user
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with email and password');
    // Add logic to handle login with email and password
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7f7f7'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%', // Ensure it doesn't exceed the screen width on small devices
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        background: 'white'
      }}>
        <img src={lockImage} alt="Lock" style={{ width: '50px', height: '50px', marginBottom: '20px' }} />
        <h2>Welcome</h2>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>
        <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ width: '240px', height: '150px', fontSize: '16px' }}
      />
      </div>
    </div>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginBottom: '10px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  marginBottom: '10px',
  background: 'pink'
};

export default LoginPage;
