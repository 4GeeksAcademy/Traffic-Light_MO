// src/Semaforo.js
import React, { useState, useEffect } from 'react';
import './Semaforo.css';

const Semaforo = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => {
        if (prevColor === 'red') return 'yellow';
        if (prevColor === 'yellow') return 'green';
        return 'red';
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="semaforo">
      <div className={`light ${color === 'red' ? 'red' : ''}`}></div>
      <div className={`light ${color === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
    </div>
  );
};

export default Semaforo;