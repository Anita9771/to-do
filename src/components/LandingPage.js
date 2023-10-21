import React from 'react';
import '../App.css'; // Apply your CSS styles here

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to My Todo App</h1>
        <p>
          Streamline your tasks, enhance your productivity, and stay organized
          with our application created using React, NodeJS, and Oracle DB.
        </p>
        <p>
          Whether it's managing your personal to-dos, organizing your work
          tasks, or collaborating with your team, our app has you covered.
        </p>
        <div className="landing-buttons">
          <a href="/login" className="login-button">
            Login
          </a>
          <a href="/register" className="register-button">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
