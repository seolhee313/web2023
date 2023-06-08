import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Member from './components/pages/Member';
import Mv from './components/pages/Mv';
import Youtube from './components/pages/Youtube';
import Playlist from './components/pages/Playlist';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap score5 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/mv" element={<Mv />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer attr={'footer__wrap score5 section bg-blue'} />
    </BrowserRouter>
  );
}

export default App;
