import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import MvSection from './components/section/MvSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import PlaylistSection from './components/section/PlaylistSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={['header__wrap', 'score5', 'bg-blue']} />
      <Main>
        <SliderSection attr={'slider__wrap score5 section'} />
        <IntroSection attr={'intro__wrap score5 section bg-blue'} />
        <MemberSection attr={'member__wrap score5 section center'} />
        <MvSection attr={'mv__wrap score5 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap score5 section'} />
        <PlaylistSection attr={'playlist__wrap score5 section bg-blue'} />
        <MovieSection attr={'movie__wrap score5 section'} />
      </Main>
      <Footer attr={'footer__wrap score5 section bg-blue'} />
    </>
  );
}

export default App;
