import React, { useState, useEffect } from 'react';

function Greeter(props) {
  const [message, setMessage] = useState('Good evening');
  const [name, setName] = useState('JOSAN');

  useEffect(() => {
    const now = new Date().getHours();
    if (now >= 18) setMessage('Good evening');
    else if (now >= 12) setMessage('Good afternoon');
    else if (now >= 5) setMessage('Good morning');
    else if (now >= 0) setMessage('Good night');
    else setMessage('Hello');
  }, []);

  return (
    <h1>
      {message} {name}!
    </h1>
  );
}

export default Greeter;
