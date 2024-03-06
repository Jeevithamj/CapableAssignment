// components/Game.js
import React, { useState } from 'react';

function Game() {
  const [pumpCount, setPumpCount] = useState(0);
  const [message, setMessage] = useState('');

  const pumpBalloon = () => {
    if (pumpCount >= 5) {
      setMessage('Oops! Balloon popped!');
    } else {
      setPumpCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h2>Game</h2>
      <p>Pump Count: {pumpCount}</p>
      <button onClick={pumpBalloon}>Pump Balloon</button>
      <p style={{ color: 'red' }}>{message}</p>
    </div>
  );
}

export default Game;
