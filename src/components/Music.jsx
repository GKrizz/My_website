import React, { useState } from 'react';
import './Music.css'; // Make sure to import the CSS file

const Music = () => {
    const [selectedComposer, setSelectedComposer] = useState('All');

    const songs = [
        // { composer: 'Ilaiyaraaja', title: 'Raja Raja Chozhan', url: '/src/assets/videos/Raja Raja Chozhan.mp4' },
        { composer: 'Yuvan Shankar Raja', title: 'Azhagho Azhaghu', url: '/src/assets/videos/Azhagho Azhaghu.mp4' },
        { composer: 'GV Prakash', title: 'Yaar Indha Saalai Oram', url: '/src/assets/videos/Yaar Indha Saalai Oram.mp4' },
        { composer: 'Yuvan Shankar Raja', title: 'Venmegam Pennaga', url: '/src/assets/videos/Venmegam Pennaga.mp4' },
        { composer: 'Santhosh Narayanan', title: 'Anel Meley Pani Thuli', url: '/src/assets/videos/Anel Meley Pani Thuli.mp4' },
        // { composer: 'Anirudh Ravichander', title: 'Megham Karukatha', url: '/src/assets/videos/Megham Karukatha.mp4' },
    ];

    // Filter songs based on the selected composer
    const filteredSongs =
        selectedComposer === 'All' ? songs : songs.filter(song => song.composer === selectedComposer);

    return (
        <div style={{ padding: '1.5rem' }}>
            {/* Composer Filter Buttons */}
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <button className="music-button" onClick={() => setSelectedComposer('All')}>
                    All
                </button>
                {/* <button className="music-button" onClick={() => setSelectedComposer('Ilaiyaraaja')}>
                    Ilaiyaraaja
                </button> */}
                
                <button className="music-button" onClick={() => setSelectedComposer('Yuvan Shankar Raja')}>
                    U1
                </button>
                {/* <button className="music-button" onClick={() => setSelectedComposer('Anirudh Ravichander')}>
                    Anirudh
                </button> */}
             
                <button className="music-button" onClick={() => setSelectedComposer('Santhosh Narayanan')}>
                    Santhosh Narayanan
                </button>
                <button className="music-button" onClick={() => setSelectedComposer('GV Prakash')}>
                    GV Prakash
                </button>
            </div>

            {/* Display Filtered Songs */}
            <div className="music-container">
                {filteredSongs.map((song, idx) => (
                    <div key={idx} className="music-card">
                        <video
                            src={song.url}
                            controls
                        />
                        <p>{song.title}</p>
                        <small>{song.composer}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;
