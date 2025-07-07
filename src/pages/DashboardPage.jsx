import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DashboardPage({ onPlayTrack }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/tracks');
        setTracks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tracks:', error);
        setLoading(false);
      }
    };
    fetchTracks();
  }, []);
  if (loading) {
    return <div>loading music</div>;
  }
  return (
    <div>
      <h1>your music dashboard</h1>
      <h2>available tracks</h2>
      <div className="track-list">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div
              key={track._id}
              onClick={() => onPlayTrack(track)}
              style={{
                borderBottom: '1px solid #ccc',
                padding: '10px',
                cursor: 'pointer' 
              }}
            >
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
            </div>
          ))
        ) : (
          <p>no track found</p>
        )}
      </div>
    </div>
  );
}
export default DashboardPage;