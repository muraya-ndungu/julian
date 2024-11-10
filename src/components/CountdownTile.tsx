import React, { useState, useEffect } from 'react';
import './CountdownTile.css';

const CountdownTile = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Function to calculate the next Sunday date
  const getNextSunday = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const daysUntilNextSunday = (7 - currentDay) % 7; // Calculate days until next Sunday

    // If today is Sunday, set the target to the next Sunday
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilNextSunday + 7); // add 7 to get the following Sunday

    // Set the target date at midnight for the next Sunday
    nextSunday.setHours(0, 0, 0, 0); // Set to 00:00:00:000 (midnight)

    return nextSunday;
  };

  const targetDate = getNextSunday().getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nowInEAT = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }));
      const distance = targetDate - nowInEAT.getTime();

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-tile">
      <div className="time-unit">
        <div className="value">{timeRemaining.days}</div>
        <div className="label">Days</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.hours}</div>
        <div className="label">Hours</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.minutes}</div>
        <div className="label">Minutes</div>
      </div>
      <div className="time-unit">
        <div className="value">{timeRemaining.seconds}</div>
        <div className="label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTile;
