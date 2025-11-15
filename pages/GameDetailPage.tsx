
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES, MOCK_REVIEWS } from '../constants';
import { Review } from '../types';
import MainHeader from '../components/MainHeader';


const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center text-yellow-400">
            {[...Array(fullStars)].map((_, i) => <span key={`full_${i}`} className="material-symbols-outlined !text-base">star</span>)}
            {halfStar && <span className="material-symbols-outlined !text-base">star_half</span>}
            {[...Array(emptyStars)].map((_, i) => <span key={`empty_${i}`} className="material-symbols-outlined !text-base text-gray-500">star</span>)}
        </div>
    );
};


const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="rounded-xl bg-white/5 p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url('${review.user.avatar}')` }}></div>
            <div>
                <p className="font-semibold text-white">{review.user.name}</p>
                <StarRating rating={review.rating} />
            </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
    </div>
);


const GameDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const game = GAMES.find(g => g.id === id);

    if (!game) {
        return <div className="text-white text-center p-10">Game not found.</div>;
    }

    const reviews = MOCK_REVIEWS.filter(r => r.gameId === game.id);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <MainHeader />
            <main className="flex flex-1 justify-center py-5 sm:py-8 lg:py-12">
                <div className="layout-content-container flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2">
                        <Link className="text-[#9da6b9] hover:text-white text-sm font-medium leading-normal transition-colors" to="/browse">Browse</Link>
                        <span className="text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                        <Link className="text-[#9da6b9] hover:text-white text-sm font-medium leading-normal transition-colors" to="/browse">{game.genres[0]} Games</Link>
                        <span className="text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                        <span className="text-white text-sm font-medium leading-normal">{game.title}</span>
                    </div>

                    <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black">
                                <img alt={`Gameplay footage from ${game.title}`} className="absolute inset-0 h-full w-full object-cover opacity-70" src={game.heroImage} />
                                <div className="relative z-10 flex flex-col items-center">
                                    <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-110">
                                        <span className="material-symbols-outlined !text-4xl">play_arrow</span>
                                    </button>
                                    <p className="mt-2 text-white text-lg font-bold">Watch Trailer</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {game.gallery.slice(0, 4).map((img, index) => (
                                    <div key={index} className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url('${img}')` }}></div>
                                ))}
                            </div>
                        </div>

                        <aside className="flex flex-col gap-6 lg:col-span-1">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{game.title}</h1>
                                <p className="text-[#9da6b9] text-base font-normal leading-normal">{game.developer}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {game.genres.map(genre => (
                                    <div key={genre} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-3">
                                        <p className="text-white text-sm font-medium leading-normal">{genre}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4 rounded-xl bg-white/5 p-4">
                                <div className="flex items-baseline justify-between">
                                    <p className="text-2xl font-bold text-white">{game.price}</p>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-400 !text-xl">star</span>
                                        <span className="text-white font-semibold">{game.rating}</span>
                                        <span className="text-gray-400 text-sm">({game.reviewCount.toLocaleString()})</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Buy Now</span>
                                    </button>
                                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                                        <span className="truncate">Add to Wishlist</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 text-sm">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Release Date</span>
                                    <span className="font-medium text-white">{game.releaseDate}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Publisher</span>
                                    <span className="font-medium text-white">{game.publisher}</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-gray-400">Platforms</span>
                                    <div className="flex gap-2 items-center">
                                        {game.platforms.map(platform => <span key={platform} className="material-symbols-outlined !text-lg text-white">{platform}</span>)}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="py-6">
                                <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>{game.longDescription}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 border-t border-white/10 pt-8">Reviews</h2>
                         <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-white">Overwhelmingly Positive <span className="text-sm font-normal text-gray-400">({game.reviewCount.toLocaleString()} Reviews)</span></p>
                            </div>
                            <button className="flex w-full md:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 bg-white/10 text-white text-sm font-bold leading-normal hover:bg-white/20 transition-colors">
                                <span className="material-symbols-outlined !text-xl">edit</span>
                                <span>Write a Review</span>
                            </button>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {reviews.map(review => <ReviewCard key={review.id} review={review} />)}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default GameDetailPage;
