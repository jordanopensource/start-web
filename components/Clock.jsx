import React, { useEffect, useState } from 'react';
import { getDate } from '../utils/getDate';

const Clock = ({ h24 = true }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [pm, setPm] = useState(false);
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const update = () => {
      const date = new Date();
      let hour = date.getHours();
      if (!h24) {
        hour = hour % 12 || 12;
      }
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
      setPm(date.getHours() >= 12);
    };

    update();

    const interval = setInterval(() => {
      update();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl">
      {date} - {hour}:{minute}:{second} {!h24 ? (pm ? 'PM' : 'AM') : ''}
    </div>
  );
};

export default Clock;
