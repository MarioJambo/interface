import React, { useEffect, useState } from 'react';

const Titulo = () => {
  const [text, setText] = useState('Seja bem vindo');
  const colors = ['#2196F3', '#4CAF50', '#FF9800', '#9C27B0', '#E91E63'];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const getTextWithColor = () => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ color: colors[(index + colorIndex) % colors.length] }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="Titulo">
      <h1>{getTextWithColor()}</h1>
    </div>
  );
};

export default Titulo;
