import React, { useState, useEffect } from 'react';
import '../styles/#index.css';

const TrafficLight = () => {
  const [state, setState] = useState('RED');

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => {
        switch (prevState) {
          case 'RED':
            return 'GREEN';
          case 'GREEN':
            return 'YELLOW';
          case 'YELLOW':
            return 'RED';
          default:
            return 'RED';
        }
      });
    }, 1000); // Cambia el estado cada segundo

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="trafficlight">
      <div className={`light ${state === 'RED' ? 'red' : ''}`}></div>
      <div className={`light ${state === 'YELLOW' ? 'yellow' : ''}`}></div>
      <div className={`light ${state === 'GREEN' ? 'green' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
