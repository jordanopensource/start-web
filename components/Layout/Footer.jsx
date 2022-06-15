import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Icon from '../Icon';
import { useRouter } from 'next/router';

const Footer = () => {
  const [credits, setCredits] = useState('JOSA');
  const [easter, setEaster] = useState(0);
  const [showIcon, setShowIcon] = useState(true);
  const justifyContent = showIcon ? 'justify-between' : 'justify-end';
  const router = useRouter();

  useEffect(() => {
    router.pathname === '/settings' ? setShowIcon(false) : setShowIcon(true);
  }, [router]);

  const roboLove = (e) => {
    if (easter < 5) {
      setEaster((easter += 1));
    } else {
      setCredits('@thamudi 💀');
      setInterval(() => {
        setCredits('JOSA');
        setEaster(0);
      }, 5000);
    }
  };

  return (
    <footer className={`container flex ${justifyContent} py-2`}>
      {showIcon && (
        <Link href="/settings" passHref>
          <div className="w-fit cursor-pointer">
            <Icon icon="mdiCog" color="" />
          </div>
        </Link>
      )}
      <div>
        <span className="flex flex-row items-center gap-x-2">
          <Icon icon="mdiCodeTags" /> with
          <div onClick={(e) => roboLove(e)}>
            <Icon icon="mdiRobotLove" classes="cursor-pointer relative" />
          </div>
          by {credits}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
