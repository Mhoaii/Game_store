
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_USER, GAMES } from '../constants';
import { Game } from '../types';
import MainHeader from '../components/MainHeader';

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
    <Link to={`/game/${game.id}`} className="group relative aspect-[3/4] overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={game.coverImage} alt={`Cover art for ${game.title}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="font-bold text-white">{game.title}</h3>
            <button className="mt-2 flex w-full items-center justify-center rounded-lg bg-primary py-2 text-sm font-bold text-white">Play</button>
        </div>
    </Link>
);


const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Library');
    const user = MOCK_USER;

    const libraryGames = GAMES.filter(game => user.library.includes(game.id));
    const wishlistGames = GAMES.filter(game => user.wishlist.includes(game.id));
    
    const renderContent = () => {
        switch (activeTab) {
            case 'Library':
                return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {libraryGames.map(game => <GameCard key={game.id} game={game} />)}
                </div>;
            case 'Wishlist':
                 return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {wishlistGames.map(game => <GameCard key={game.id} game={game} />)}
                </div>;
            case 'Reviews':
                return <p className="text-center text-gray-400">No reviews yet.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <MainHeader />
            <main className="w-full grow px-4 py-8 md:px-8">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
                    <aside className="lg:col-span-3">
                        <div className="sticky top-24 flex flex-col gap-6 rounded-xl border border-gray-300/20 bg-white/5 p-6 dark:bg-white/5">
                            <div className="flex w-full flex-col items-center gap-4 text-center">
                                <div className="relative">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
                                    <button className="absolute bottom-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                                        <span className="material-symbols-outlined !text-lg">edit</span>
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.username}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Member since {user.memberSince}</p>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>
                            <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90">
                                <span className="material-symbols-outlined !text-lg">settings</span>
                                <span className="truncate">Edit Profile</span>
                            </button>
                        </div>
                    </aside>

                    <div className="lg:col-span-9">
                        <div className="border-b border-gray-300/20">
                            <div className="flex gap-2 sm:gap-6 px-1 sm:px-4">
                                {['Library', 'Wishlist', 'Reviews'].map(tab => (
                                    <button key={tab} onClick={() => setActiveTab(tab)} className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${activeTab === tab ? 'border-b-primary' : 'border-b-transparent group'}`}>
                                        <p className={`text-sm font-bold ${activeTab === tab ? 'text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'}`}>{tab}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="py-6">
                           {renderContent()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
