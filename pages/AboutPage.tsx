
import React from 'react';
import MainHeader from '../components/MainHeader';

const AboutPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <MainHeader />
            <main className="w-full grow px-4 py-8 md:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Welcome to GameStore</h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">Your ultimate destination for discovering and playing the best web games. Dive into a universe of instant entertainment, right from your browser.</p>
                    </div>
                    <div className="mt-12 flex flex-col gap-12">
                        <section className="rounded-xl border border-gray-300/20 bg-white/5 p-8 dark:bg-white/5">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Our Platform Functions</h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Explore the features that make GameStore the best place for web gaming.</p>
                            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                                <FeatureItem icon="rocket_launch" title="Instant Play" description="No downloads, no installations. Click and play your favorite games instantly on any device with a web browser." />
                                <FeatureItem icon="explore" title="Curated Discovery" description="Discover new games every day through our curated lists, categories, and personalized recommendations." />
                                <FeatureItem icon="group" title="Community Hub" description="Join a vibrant community of gamers. Share reviews, create guides, and connect with fellow players." />
                                <FeatureItem icon="cloud_sync" title="Cross-Platform Sync" description="Your progress is saved to your account. Start a game on your desktop and continue on your mobile device seamlessly." />
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Our Mission</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">At GameStore, our objective is to create an accessible, inclusive, and enjoyable ecosystem for web game players and developers. We aim to break down the barriers to gaming by providing a platform where anyone can instantly access a vast library of high-quality games without the need for powerful hardware or lengthy downloads. We are committed to supporting indie developers by offering a fair and open platform to showcase their creations to a global audience. Our goal is to foster a positive community where players can connect, share their passion, and discover their next favorite game together.</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

const FeatureItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    </div>
);

export default AboutPage;
