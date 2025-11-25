import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import ContentDetail from './components/ContentDetail';
import ContentForm from './components/ContentForm';
import './App.css';

function App() {
  return (
    <Router>
      <ContentProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/add" element={<ContentForm />} />
            <Route path="/edit/:id" element={<ContentForm />} />
            <Route path="/content/:id" element={<ContentDetail />} />
          </Routes>
          <Navbar />
        </div>
      </ContentProvider>
    </Router>
  );
}

export default App;
