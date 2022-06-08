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
    <footer className="container flex justify-between py-2">
      {showIcon && (
        <>
          <Link href="/settings" passHref>
            <div className="w-fit cursor-pointer">
              <Icon icon="mdiCog" color="" />
            </div>
          </Link>
          <div>
            <span className="flex flex-row items-center">
              <Icon icon="mdiCodeTags" /> with
              <Icon icon="mdiRobotLove" /> by JOSA
            </span>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
