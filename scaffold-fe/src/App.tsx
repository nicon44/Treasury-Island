import React, { useState } from 'react';
import { Lobby, GameRoom } from '@/pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // === === === === === === ===
  return (
    <>
      <Router>
        <Routes>
            {/* Lobby Page */}
            <Route path="/" element={<Lobby/>} />
            <Route path="/room/:roomId" element={<GameRoom />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
