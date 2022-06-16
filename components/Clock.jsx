import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/state';

const Clock = () => {
  const myContext = useAppContext();
  const [h24, setH24] = useState(myContext.isMilitaryTime);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [pm, setPm] = useState(false);

  useEffect(() => {
    const update = () => {
      const date = new Date();
      let hour = date.getHours();
      if (!h24) {
        hour = hour % 12 || 12;
      }
      setH24(myContext.isMilitaryTime);
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
      {hour}:{minute}:{second} {!h24 ? (pm ? 'PM' : 'AM') : ''}
    </div>
  );
};

export default Clock;
