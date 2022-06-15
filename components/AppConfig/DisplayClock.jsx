import React from 'react';
import Toggle from '../Form/Toggle';
import { useAppContext } from '../../context/state';

function DisplayClock() {
  const myContext = useAppContext();
  return (
    <div className="container flex flex-col gap-y-8">
      <h2>Change Clock Setting</h2>
      <div className="flex flex-row items-center">
        <span className="mr-8">Toggle 24 hour mode</span>{' '}
        <Toggle
          isChecked={myContext.isMilitaryTime}
          toggleInput={() => myContext.toggleMilitaryTime()}
        />
      </div>
    </div>
  );
}

export default DisplayClock;
