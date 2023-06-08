import React from 'react';

import { Link } from 'react-router-dom';

const movieText = {
  title: '음악과 영화의 환상적인 만남',
  desc: (
    <p>
      음악은 우리의 삶을 아름답게 만듭니다.
      <br />
      음악이 주는 힘을 영화를 통해 더욱 깊이 경험해보세요!
    </p>
  ),
  link: '자세히 보기',
};

const movieItem = [
  {
    img: './assets/images/movie/movie01.svg',
  },
  {
    img: './assets/images/movie/movie02.svg',
  },
  {
    img: './assets/images/movie/movie03.svg',
  },
  {
    img: './assets/images/movie/movie04.svg',
  },
  {
    img: './assets/images/movie/movie05.svg',
  },
  {
    img: './assets/images/movie/movie06.svg',
  },
];

function MovieItem({ img }) {
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
}

function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>{movieText.title}</h3>
          <>{movieText.desc}</>
          <Link to="/" className="button-blue">
            자세히 보기
          </Link>
        </div>
        <div className="movie__item">
          {movieItem.map((text, index) => (
            <MovieItem
              key={index}
              img={text.img}
              // num={text.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
