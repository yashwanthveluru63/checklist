import React from 'react';
import { useContent } from '../context/ContentContext';
import './Profile.css';

function Profile() {
  const { content: contents } = useContent();

  const stats = {
    total: contents.length,
    watching: contents.filter(c => c.status === 'watching').length,
    completed: contents.filter(c => c.status === 'completed').length,
    planToWatch: contents.filter(c => c.status === 'plan-to-watch').length,
    onHold: contents.filter(c => c.status === 'on-hold').length,
    dropped: contents.filter(c => c.status === 'dropped').length,
  };

  const typeBreakdown = {
    movies: contents.filter(c => c.type === 'movie').length,
    series: contents.filter(c => c.type === 'series').length,
    anime: contents.filter(c => c.type === 'anime').length,
    documentaries: contents.filter(c => c.type === 'documentary').length,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <h1>My Profile</h1>
      </div>

      <div className="profile-stats">
        <h2>Watchlist Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Items</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.watching}</div>
            <div className="stat-label">Watching</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.planToWatch}</div>
            <div className="stat-label">Plan to Watch</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.onHold}</div>
            <div className="stat-label">On Hold</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.dropped}</div>
            <div className="stat-label">Dropped</div>
          </div>
        </div>
      </div>

      <div className="profile-breakdown">
        <h2>Content Type Breakdown</h2>
        <div className="breakdown-grid">
          <div className="breakdown-item">
            <span className="breakdown-label">Movies:</span>
            <span className="breakdown-value">{typeBreakdown.movies}</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">Series:</span>
            <span className="breakdown-value">{typeBreakdown.series}</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">Anime:</span>
            <span className="breakdown-value">{typeBreakdown.anime}</span>
          </div>
          <div className="breakdown-item">
            <span className="breakdown-label">Documentaries:</span>
            <span className="breakdown-value">{typeBreakdown.documentaries}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
