import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon';
import { useRouter } from 'next/router';

const Footer = () => {
  const [showIcon, setShowIcon] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.pathname === '/settings' ? setShowIcon(false) : setShowIcon(true);
  }, [router]);

  return (
    <footer className="container">
      {showIcon && (
        <Link href="/settings" passHref>
          <div className="cursor-pointer">
            <Icon icon="mdiCog" color="" />
          </div>
        </Link>
      )}
    </footer>
  );
};

export default Footer;
