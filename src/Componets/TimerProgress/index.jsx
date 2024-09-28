import React, { useState, useEffect } from 'react';
import './TimerProgress.css'; 

const TimerProgress = () => {
  const [time, setTime] = useState(14 * 60); 
  const totalDuration = (15 * 60 - 1) - (14 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      if (time < 15 * 60) {
        setTime((prevTime) => prevTime + 1); 
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [time]);

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  const progress = ((time - 14 * 60) / totalDuration) * 100; 

  return (
    <div className="whites">
      <div className="name-sec">
        <div className="women_wrap">
          <img src="women.png" alt="Fatima Saleem" />
          <div className="flex-column">
            <h6>Fatima Saleem</h6>
            <p>(Aug 07, 2024 - Aug 15, 2024)</p>
          </div>
        </div>
      </div>

      <div className="name-sec text-center">
        <p>Hours Worked</p>
        <h5>{formattedTime} Hours</h5> {}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div> {}
        </div>
      </div>
    </div>
  );
};

export default TimerProgress;
