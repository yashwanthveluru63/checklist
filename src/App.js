import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import Discover from './components/Discover';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'login') {
      return <Login onLogin={() => setIsLoggedIn(true)} />;
    }

    switch (currentPage) {
      case 'login':
        return <Login onLogin={() => { setIsLoggedIn(true); setCurrentPage('dashboard'); }} />;
      case 'dashboard':
        return <Dashboard />;
      case 'search':
        return <Search />;
      case 'discover':
        return <Discover />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      {isLoggedIn && (
        <header className="App-header">
          <div className="header-left">
            <img src={logo} alt="CheckList Logo" className="logo" />
            <h1 className="project-name">CheckList</h1>
          </div>
          <nav className="header-nav">
            <a href="#dashboard" onClick={() => setCurrentPage('dashboard')}>Dashboard</a>
            <a href="#discover" onClick={() => setCurrentPage('discover')}>Discover</a>
            <a href="#search" onClick={() => setCurrentPage('search')}>Search</a>
            <a href="#logout" onClick={() => { setIsLoggedIn(false); setCurrentPage('login'); }}>Logout</a>
          </nav>
        </header>
      )}
      
      <main className="App-main">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
