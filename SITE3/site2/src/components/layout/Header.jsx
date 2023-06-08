function Header(props) {
  return (
    <header id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <a href="/">
            SEOLHEE <em>site</em>
          </a>
        </h1>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="#introSection">소개</a>
            </li>
            <li>
              <a href="#memberSection">멤버 소개</a>
            </li>
            <li>
              <a href="#MVSection">MV</a>
            </li>
            <li>
              <a href="#youtubeSection">유튜브</a>
            </li>
            <li>
              <a href="#playlistSection">PLAYLIST</a>
            </li>
            <li>
              <a href="#movieSection">영화</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
