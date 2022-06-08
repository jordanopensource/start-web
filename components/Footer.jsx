import React from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';

const Footer = () => {
  return (
    <footer className="container">
      <Link href="/settings" passHref>
        <div className="cursor-pointer">
          <Icon icon="mdiCog" color="" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
