import React from 'react';
import './Player.css';
const Player = () => {
  return (
    <div className="player-container">
      <div className="track-info">
        {}
        <p>No song selected</p>
      </div>
      <div className="player-controls">
        <button>Prev</button>
        <button>Play/Pause</button>
        <button>Next</button>
      </div>
      <div className="progress-bar-container">
        {}
      </div>
    </div>
  );
};
export default Player;