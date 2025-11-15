
import React from 'react';
import DevHeader from '../components/DevHeader';

const GuideNavLink: React.FC<{ href: string; icon: string; text: string; active?: boolean }> = ({ href, icon, text, active }) => (
    <a className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${active ? 'bg-primary/20 dark:bg-[#282e39]' : 'hover:bg-gray-100 dark:hover:bg-[#282e39]/50'}`} href={href}>
        <span className={`material-symbols-outlined ${active ? 'text-primary dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{icon}</span>
        <p className={`text-sm font-medium ${active ? 'text-primary dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>{text}</p>
    </a>
);


const GuidesPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <DevHeader active="Guides"/>
            <div className="container mx-auto flex flex-1 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex w-full flex-col md:flex-row gap-8 lg:gap-12 py-8">
                    <aside className="w-full md:w-64 lg:w-72 md:sticky top-24 self-start">
                        <div className="flex h-full flex-col justify-between p-4 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-[#282e39] rounded-xl">
                            <div className="flex flex-col gap-4">
                                <nav className="flex flex-col gap-1">
                                    <GuideNavLink href="#prepare-assets" icon="photo_library" text="1. Preparing Your Assets" active />
                                    <GuideNavLink href="#submission-form" icon="description" text="2. The Submission Form" />
                                    <GuideNavLink href="#review-process" icon="thumb_up" text="3. The Review Process" />
                                    <GuideNavLink href="#best-practices" icon="star" text="4. Best Practices" />
                                    <GuideNavLink href="#faq" icon="help_outline" text="5. FAQ" />
                                </nav>
                            </div>
                        </div>
                    </aside>
                    <main className="flex-1">
                        <section className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-gray-200 dark:border-[#282e39] pb-8 mb-8">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">Guide to Uploading Your Game</p>
                                <p className="text-base font-normal leading-normal text-gray-600 dark:text-[#9da6b9]">A complete step-by-step guide to preparing, submitting, and launching your game on our platform.</p>
                            </div>
                        </section>
                        <section className="space-y-4 mb-12 scroll-mt-24" id="prepare-assets">
                            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">1. Preparing Your Assets</h2>
                            <p className="text-base font-normal leading-relaxed">Before you begin the submission process, it's crucial to have all your assets ready. This section covers the requirements for your game build, store assets like icons and screenshots, and other technical specifications.</p>
                            <ul className="list-disc list-inside space-y-2 text-base">
                                <li><strong>Game Build:</strong> Must be a `.zip` archive containing all necessary files. Max size: 2GB.</li>
                                <li><strong>Store Icon:</strong> 512x512px, `.png` format.</li>
                                <li><strong>Screenshots:</strong> Minimum of 3, maximum of 10. Recommended resolution: 1920x1080px.</li>
                                <li><strong>Promotional Trailer:</strong> Optional, but highly recommended. YouTube or Vimeo link.</li>
                            </ul>
                        </section>
                        <section className="space-y-4 mb-12 scroll-mt-24" id="submission-form">
                            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">2. The Submission Form</h2>
                             <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
                                <span className="material-symbols-outlined text-primary mt-1">tips_and_updates</span>
                                <div>
                                    <h3 className="font-bold text-primary">Best Practice Tip</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Write a detailed description that highlights your game's unique features. Use Markdown for formatting to make it more readable.</p>
                                </div>
                            </div>
                        </section>
                        <section className="space-y-4 mb-12 scroll-mt-24" id="review-process">
                           <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">3. The Review Process</h2>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-500/10 dark:bg-yellow-500/20 border border-yellow-500/20 dark:border-yellow-500/30">
                                <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400 mt-1">warning</span>
                                <div>
                                    <h3 className="font-bold text-yellow-700 dark:text-yellow-300">Common Rejection Reasons</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Submissions are often rejected due to misleading metadata, copyright infringement, or game-breaking bugs. Please test thoroughly before submitting.</p>
                                </div>
                            </div>
                        </section>
                        <section className="space-y-4 mb-12 scroll-mt-24" id="best-practices">
                             <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">4. Best Practices & Promotion</h2>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-1">task_alt</span>
                                <div>
                                    <h3 className="font-bold text-green-700 dark:text-green-300">Post-Launch Success</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Games that are regularly updated with bug fixes and new features tend to have higher player retention and better reviews. Consider creating a roadmap and sharing it with your players.</p>
                                </div>
                            </div>
                        </section>
                        <section className="space-y-4 scroll-mt-24" id="faq">
                             <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">5. Frequently Asked Questions</h2>
                            <div className="space-y-2">
                                <details className="group rounded-lg bg-gray-100 dark:bg-[#191e2a] p-4 cursor-pointer">
                                    <summary className="flex justify-between items-center font-medium text-gray-800 dark:text-gray-200">
                                       What is the revenue share model?
                                       <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <p className="text-gray-600 dark:text-gray-400 mt-3">We operate on a standard 70/30 revenue split, where you, the developer, receive 70% of the net revenue from your game sales.</p>
                                </details>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default GuidesPage;
