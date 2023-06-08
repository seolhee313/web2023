import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection.jsx';
import IntroSection from '../section/IntroSection.jsx';
import MemberSection from '../section/MemberSection.jsx';
import MvSection from '../section/MvSection.jsx';
import YoutubeSection from '../section/YoutubeSection.jsx';
import PlaylistSection from '../section/PlaylistSection.jsx';
import MovieSection from '../section/MovieSection.jsx';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap score5 section'} />
        <IntroSection attr={'intro__wrap score5 section bg-blue'} />
        <MemberSection attr={'member__wrap score5 section center'} />
        <MvSection attr={'mv__wrap score5 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap score5 section'} />
        <PlaylistSection attr={'playlist__wrap score5 section bg-blue'} />
        <MovieSection attr={'movie__wrap score5 section'} />
      </Main>
    </>
  );
}

export default Home;
