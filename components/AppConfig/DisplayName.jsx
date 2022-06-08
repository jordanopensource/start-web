import React, { useState } from 'react';
import InputControl from '../Form/InputControl';
import Button from '../Form/Button';

const DisplayName = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [message, setMessage] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    try {
      const displayName = localStorage.setItem(
        'displayName',
        e.target.name.value
      );
      actionHandler('Name updated successfully');
    } catch (error) {
      actionHandler('Error while saving the name');
    }
  };

  const clearDisplayName = () => {
    try {
      const displayName = localStorage.removeItem('displayName');
      actionHandler('Name Cleared successfully');
    } catch (error) {
      actionHandler('Error while saving the name');
    }
  };

  const actionHandler = (msg) => {
    setMessage(msg);
    setSubmitStatus(!submitStatus);
    setInterval(() => {
      setSubmitStatus(!submitStatus);
      setMessage('');
    }, 5000);
  };
  return (
    <div className="container flex flex-col gap-y-8">
      <h2>Change Display Name</h2>
      {submitStatus && <p>{message}</p>}
      <div></div>
      <form onSubmit={formHandler}>
        <InputControl
          name="Name"
          type="text"
          required={true}
          placeholder="Your Name/ Alias"
        />
        <Button type="submit" value="save" />
      </form>
      <div>
        <Button onClick={clearDisplayName} type="button" value="Clear Name" />
      </div>
    </div>
  );
};

export default DisplayName;
