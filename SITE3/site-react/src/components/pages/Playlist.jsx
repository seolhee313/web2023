import React from 'react';
import Main from '../layout/Main';
import PlaylistSection from '../section/PlaylistSection.jsx';

function Playlist() {
  return (
    <>
      <Main>
        <PlaylistSection attr={'playlist__wrap score5 section bg-blue'} />
      </Main>
    </>
  );
}

export default Playlist;
