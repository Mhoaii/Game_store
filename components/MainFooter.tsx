
import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter: React.FC = () => {
    return (
        <footer className="mt-16 border-t border-white/10 pt-8 pb-12 px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="flex flex-col gap-4 md:col-span-1">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="size-6 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-xl font-bold">GameStore</h2>
                    </Link>
                    <p className="text-gray-400 text-sm">The ultimate destination for gamers to discover, purchase, and play their favorite titles.</p>
                </div>
                <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">Account</h3>
                    <ul className="space-y-2">
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">Profile</Link></li>
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">Wishlist</Link></li>
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">My Games</Link></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/about">About Us</Link></li>
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/about">Terms of Service</Link></li>
                    </ul>
                </div>
                 <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">Developers</h3>
                    <ul className="space-y-2">
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/submit">Submit Game</Link></li>
                        <li><Link className="text-gray-400 hover:text-white text-sm" to="/guides">Developer Guide</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                <p>© 2024 GameStore. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default MainFooter;
