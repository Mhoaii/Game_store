
import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES } from '../constants';
import { Game } from '../types';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <Link to={`/game/${game.id}`} className="flex flex-col gap-3 pb-3 group">
    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url("${game.coverImage}")` }}></div>
    <div>
      <p className="text-white text-base font-medium leading-normal truncate">{game.title}</p>
      <p className="text-gray-400 text-sm font-normal leading-normal">{game.price}</p>
    </div>
  </Link>
);

const HomePage: React.FC = () => {
  const heroGame = GAMES.find(g => g.id === 'cybernetic-horizon');
  const featuredGames = GAMES.filter(g => g.isFeatured).slice(0, 6);
  const trendingGames = GAMES.filter(g => g.isTrending).slice(0, 6);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 md:px-10 lg:px-20">
            <MainHeader />
            <main className="mt-8 flex flex-col gap-12">
              {heroGame && (
                <div className="@container">
                  <div className="@[480px]:p-0">
                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("${heroGame.heroImage}")` }}>
                      <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          {heroGame.title}: Unleash the Future
                        </h1>
                        <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                          {heroGame.description}
                        </h2>
                      </div>
                      <div className="flex-wrap gap-3 flex">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                          <span className="truncate">Play Now</span>
                        </button>
                        <Link to={`/game/${heroGame.id}`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-white/10 backdrop-blur-md text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                          <span className="truncate">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <section>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured & Recommended</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
                  {featuredGames.map(game => <GameCard key={game.id} game={game} />)}
                </div>
              </section>

              <section>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">New & Trending</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
                  {trendingGames.map(game => <GameCard key={game.id} game={game} />)}
                </div>
              </section>

              <MainFooter />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
