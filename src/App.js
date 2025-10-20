import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">CL</div>
        <h1>CheckList</h1>
      </header>
      
      <main className="App-main">
        <section className="project-purpose">
          <h2>Project Purpose</h2>
          <p>CheckList is a comprehensive task management application designed to help you organize, track, and complete your tasks efficiently. Stay on top of your goals with our intuitive interface.</p>
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
            <p>See your scheduled tasks and deadlines ahead</p>
          </div>

          <div className="feature-card">
            <h3>Search</h3>
            <p>Quickly find any task or note in your collection</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
