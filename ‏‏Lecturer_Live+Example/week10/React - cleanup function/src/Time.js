import React, { useState, useEffect } from 'react';

function Time() {
  const [showTime, setShowTime] = useState('no time');
  const myFunc = () => {
    setShowTime('keyDown');
  };
  useEffect(() => {
    window.addEventListener('keydown', myFunc);

    const timer = setTimeout(() => {
      setShowTime('current time');
    }, 5000);
    return () => {
      window.removeEventListener('keydown', myFunc);

      clearTimeout(timer);
    };
  }, []);

  return <div className='time'>{showTime}</div>;
}

export default Time;
