
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import BrowsePage from './pages/BrowsePage';
import SubmitGamePage from './pages/SubmitGamePage';
import GuidesPage from './pages/GuidesPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/submit" element={<SubmitGamePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
