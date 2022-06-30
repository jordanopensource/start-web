import React, { useEffect, useState } from 'react';

const FullDate = () => {
  const [date, setDate] = useState('');
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const now = new Date();

  useEffect(() => {
    const now = new Date();
    setDate(
      `${days[now.getDay()]}, ${
        months[now.getMonth()]
      } ${now.getDate()} ${now.getFullYear()}`
    );
  }, []);

  return <div className="text-xl">{date}</div>;
};

export default FullDate;
