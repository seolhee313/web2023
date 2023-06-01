function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>음악과 영화의 환상적인 만남</h3>
          <p>
            음악은 우리의 삶을 아름답게 만듭니다.
            <br />
            음악이 주는 힘을 영화를 통해 더욱 깊이 경험해보세요!
          </p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="movie__item">
          <div>
            <img src="./assets/images/movie/movie01.svg" alt="비긴어게인" />
          </div>
          <div>
            <img src="./assets/images/movie/movie02.svg" alt="어거스트러쉬" />
          </div>
          <div>
            <img src="./assets/images/movie/movie03.svg" alt="위플래쉬" />
          </div>
          <div>
            <img src="./assets/images/movie/movie04.svg" alt="스타이즈본" />
          </div>
          <div>
            <img src="./assets/images/movie/movie05.svg" alt="위대한쇼맨" />
          </div>
          <div>
            <img src="./assets/images/movie/movie06.svg" alt="보헤미안랩소디" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
