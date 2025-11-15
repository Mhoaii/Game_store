
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface MainHeaderProps {
  isBrowsePage?: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isBrowsePage = false }) => {
  const navLinkClass = "text-zinc-900 dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors";
  const activeNavLinkClass = "text-primary dark:text-primary text-sm font-bold leading-normal";

  if (isBrowsePage) {
    return (
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
            <Link to="/" className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">GameStore</h2>
            </Link>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={({isActive}) => isActive ? activeNavLinkClass : navLinkClass}>Home</NavLink>
            <NavLink to="/browse" className={({isActive}) => isActive ? activeNavLinkClass : navLinkClass}>Browse</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? activeNavLinkClass : navLinkClass}>My Library</NavLink>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrLK-IHtCDgPW5W4PM2wr5XF7bMkM2a_tbvFgC7VUmcgih715hgTHM7wocVfCXUWcialQVdO8KNCCHEZ94iPXRB6yzyiZPj2uyzpLrgS5S3SVQgmc_nk26U5EVQIT2peFcPQBu9JyubtgeAyrT11f8E0hyi_I5vRehZcy48dD_2YPWiL8l-9UXGJra0Z8bga3-9Zx59DPR8v5E5QzjoeeiXu4GtwTLgkPEyKfOCIcpsAM4pH9yyLgulfR8LkGaBPNm3_3EXGEOzsw")` }}>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-5 z-50 flex items-center justify-between whitespace-nowrap rounded-xl border border-solid border-white/10 bg-background-dark/80 px-6 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">GameStore</h2>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal" to="/browse">Discover</Link>
          <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal" to="/about">About</Link>
          <Link className="text-white/80 hover:text-white text-sm font-medium leading-normal" to="/guides">For Developers</Link>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrLK-IHtCDgPW5W4PM2wr5XF7bMkM2a_tbvFgC7VUmcgih715hgTHM7wocVfCXUWcialQVdO8KNCCHEZ94iPXRB6yzyiZPj2uyzpLrgS5S3SVQgmc_nk26U5EVQIT2peFcPQBu9JyubtgeAyrT11f8E0hyi_I5vRehZcy48dD_2YPWiL8l-9UXGJra0Z8bga3-9Zx59DPR8v5E5QzjoeeiXu4GtwTLgkPEyKfOCIcpsAM4pH9yyLgulfR8LkGaBPNm3_3EXGEOzsw")` }}>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
