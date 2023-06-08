import React from 'react';
import Main from '../layout/Main';
import MovieSection from '../section/MovieSection.jsx';

function Movie() {
  return (
    <>
      <Main>
        <MovieSection attr={'movie__wrap score5 section'} />
      </Main>
    </>
  );
}

export default Movie;
