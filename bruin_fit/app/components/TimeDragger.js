import React, { useState, useRef, useEffect } from 'react';
import '../../styles/timedragger.css';

const TimeDragger = ({ onTimeSelect }) => {
  const [dragging, setDragging] = useState(false);
  const [times, setTimes] = useState([]);
  const dragRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('time-slot')) {
      setDragging(true);
      const slotIndex = parseInt(e.target.dataset.index);
      setTimes([slotIndex]);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (onTimeSelect) {
      onTimeSelect(times);
    }
  };

  const handleMouseEnter = (e) => {
    if (dragging && e.target.classList.contains('time-slot')) {
      const slotIndex = parseInt(e.target.dataset.index);
      if (!times.includes(slotIndex)) {
        setTimes((prevTimes) => [...prevTimes, slotIndex]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [times]);

  return (
    <div className="time-dragger" ref={dragRef} onMouseDown={handleMouseDown}>
      {hours.map((hour) => (
        <div key={hour} className="time-row">
          <div className="time-label">{`${hour}:00`}</div>
          <div className="time-label">{`${hour}:30`}</div>
          {[0, 30].map((minute) => {
            const index = hour * 2 + minute / 30;
            return (
              <div
                key={index}
                className={`time-slot ${times.includes(index) ? 'selected' : ''}`}
                data-index={index}
                onMouseEnter={handleMouseEnter}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TimeDragger;
