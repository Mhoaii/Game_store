
import React from 'react';
import { Link } from 'react-router-dom';

interface DevHeaderProps {
  active: 'Submissions' | 'Guides' | 'Dashboard' | 'Analytics';
}

const DevHeader: React.FC<DevHeaderProps> = ({ active }) => {
  const navItems = ['Dashboard', 'Analytics', 'Submissions', 'Guides'];
  
  const getLinkClass = (item: string) => {
    if (item === active) {
      return "text-primary dark:text-primary text-sm font-bold leading-normal";
    }
    return "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal";
  };
  
  const getPath = (item: string) => {
      switch(item) {
          case 'Submissions': return '/submit';
          case 'Guides': return '/guides';
          default: return '#';
      }
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 sm:px-10 lg:px-20 py-3 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </g>
              <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">GameStore Connect</h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center gap-8">
        <nav className="hidden md:flex items-center gap-9">
            {navItems.map(item => <Link key={item} className={getLinkClass(item)} to={getPath(item)}>{item}</Link>)}
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Submit Game</span>
          </Link>
          <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-YwmYpDDDHiLUXB4GqFvQZ8dOeLc0CXydcLqzqdIvWzyfK1vyiUtQah8Fx9dB00Nz3ZHcKtmPdQWmwC1eqRYdR_bBoYuih2YSycrOJgMWL2NOeQ7JSzPUesQL6BX5TNkO6QeZN7DhwcONEE9Y6AYkPbz_GwiOPMULozA4eIIkiMxDYQZ6NTRsTcnt-3y2VRbBwAaYMi-JH0GSmqOaopIfxrQ9pykRCVv01Cwbxk_2lA7-39IaiIKiSUIjpVf3Kd-dhivhxXl2VHU")' }}>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DevHeader;
