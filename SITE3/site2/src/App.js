import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import Member from './components/pages/Member';
import Mv from './components/pages/Mv';
import Youtube from './components/pages/Youtube';
import Playlist from './components/pages/Playlist';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member" element={<Member />} />
        <Route path="/mv" element={<Mv />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
