function PlaylistSection(props) {
  return (
    <section id="playlistSection" className={props.attr}>
      <div className="playlist__inner container">
        <div className="playlist__text">
          <h3>음악 여행을 위한 완벽한 PLAYLIST</h3>
          <p>
            다양한 장르와 음악 스타일을 탐험하세요!
            <br />
            당신의 음악 선호도에 맞는 개성 넘치는 플레이리스트.
          </p>
          <a href="/" className="button-green">
            자세히 보기
          </a>
        </div>
        <div className="playlist__item">
          <div>
            <a href="https://www.youtube.com/watch?v=SDsCCr03zXg">
              <img src="./assets/images/playlist/playlist01.svg" alt="찐막" />
            </a>
            <span>
              "내가 237분 동안 사라진 이유" 호불호 없는
              <br />
              감성 힙합 & 알앤비 노래 모음
            </span>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=A_j_L8AdVLE">
              <img src="./assets/images/playlist/playlist02.svg" alt="에센셜" />
            </a>
            <span>
              [Playlist] 느낌있게 리듬 타고 싶을 때 | 기분이
              <br />
              좋아지는 리드미컬한 데일리 팝
            </span>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=Pqzeqt7j2uQ">
              <img src="./assets/images/playlist/playlist03.svg" alt="팝송플리" />
            </a>
            <span>
              Playlist 내 취향 가득 담은 Feat. 해리 스타일스,
              <br />
              찰리 푸스, 코난 그레이, 라우브, 트로이 시반
            </span>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=J79HVjqxejs">
              <img src="./assets/images/playlist/playlist04.svg" alt="비오는날" />
            </a>
            <span>
              비 오는 날에 들으면 감성 터지는 취향저격
              <br />
              노래 모음 | PLAYLIST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaylistSection;
