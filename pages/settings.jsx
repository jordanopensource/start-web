import React from 'react';
import Link from 'next/link';

const Settings = () => {
  return (
    <div>
      <h1 className="my-8">Settings</h1>
      <Link href="/" passHref>
        <p className="cursor-pointer underline">Go back</p>
      </Link>
    </div>
  );
};

export default Settings;
