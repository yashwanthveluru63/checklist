import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src={logo} alt="CheckList Logo" className="logo" />
          <h1 className="project-name">CheckList</h1>
        </div>
        <nav className="header-nav">
          <a href="#login">Login</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#feed">Feed</a>
          <a href="#discover">Discover</a>
          <a href="#upcoming">Upcoming</a>
          <a href="#search">Search</a>
        </nav>
      </header>

      <div className="App-container">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <a href="#login" className="sidebar-link">Login</a>
            <a href="#dashboard" className="sidebar-link">Dashboard</a>
            <a href="#feed" className="sidebar-link">Feed</a>
            <a href="#discover" className="sidebar-link">Discover</a>
            <a href="#upcoming" className="sidebar-link">Upcoming</a>
            <a href="#search" className="sidebar-link">Search</a>
          </nav>
        </aside>

        <main className="App-main">
          <section className="project-purpose">
            <h2>Project Purpose</h2>
            <p>
              CheckList is a comprehensive task management application designed to help you organize,
              track, and complete your tasks efficiently. Stay on top of your goals with our intuitive interface.
            </p>
          </section>

          <section className="features">
            <div className="feature-card">
              <h3>Login</h3>
              <p>Secure authentication to access your personalized task lists</p>
            </div>
            <div className="feature-card">
              <h3>Dashboard</h3>
              <p>View your task overview and progress at a glance</p>
            </div>
            <div className="feature-card">
              <h3>Feed</h3>
              <p>Stay updated with your latest activities and task updates</p>
            </div>
            <div className="feature-card">
              <h3>Discover</h3>
              <p>Explore new productivity tips and task templates</p>
            </div>
            <div className="feature-card">
              <h3>Upcoming</h3>
              <p>Preview your scheduled tasks and deadlines</p>
            </div>
            <div className="feature-card">
              <h3>Search</h3>
              <p>Quickly find any task or project in your workspace</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
