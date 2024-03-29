import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "835751562930-e9d0dn6c3ncorlnk84kbapo79oiogu77.apps.googleusercontent.com";

function LoginPage() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // Handle login success by storing the user data, or navigating to another page, etc.
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // Handle login failure, such as displaying a notification to the user
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f7f7f7' }}>
      <h2 style={{ margin: '0 0 20px 0' }}>React Google Sign In</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ width: '240px', height: '50px', fontSize: '16px' }}
      />
    </div>
  );
}

export default LoginPage;
