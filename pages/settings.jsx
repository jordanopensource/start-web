import React, { useState } from 'react';
import Link from 'next/link';
import SettingsNav from '../components/Layout/SettingsNav';
import DisplayClock from '../components/AppConfig/DisplayClock';
import DisplayTheme from '../components/AppConfig/DisplayTheme';

const Settings = () => {
  const [active, setActive] = useState('display-theme');

  return (
    <div className="my-8 flex gap-x-16">
      <div id="settings-nav">
        <div className="mb-8">
          <h2>Settings</h2>
          <Link href="/" passHref>
            <p className="cursor-pointer underline">Go back</p>
          </Link>
        </div>
        <SettingsNav activeName={active} changeActive={setActive} />
      </div>
      <div id="display-config" className="mt-20 w-full">
        {renderComponents(active)}
      </div>
    </div>
  );
};

export default Settings;

const renderComponents = (active) => {
  switch (active) {
    case 'display-clock':
      return <DisplayClock />;
    case 'display-theme':
      return <DisplayTheme />;
    default:
      break;
  }
};
