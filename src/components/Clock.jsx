// Clock.jsx
import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Updates by the second

    // Clear the interval at component unmount
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDateTime);

  return (
    <>
      {formattedDateTime} h.
    </>
  );
};

export default DateTimeDisplay;
