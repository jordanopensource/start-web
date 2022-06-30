import React from 'react';
import Toggle from '../Form/Toggle';
import { useDashboardContext } from '../../context/dashboard';

function DisplayClock() {
  const dashboardContext = useDashboardContext();
  return (
    <div className="container flex flex-col gap-y-8">
      <h2>Clock Setting</h2>
      <div className="flex flex-col items-center gap-y-8   lg:flex-row">
        <span className="mr-8">Toggle 24 hour mode</span>{' '}
        <Toggle
          isChecked={dashboardContext.isMilitaryTime}
          toggleInput={() => dashboardContext.toggleMilitaryTime()}
        />
      </div>
    </div>
  );
}

export default DisplayClock;
