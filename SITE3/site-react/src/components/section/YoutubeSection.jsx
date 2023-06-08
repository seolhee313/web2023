import React from 'react';

import { Link } from 'react-router-dom';

const youtubeText = {
  title: '당신의 음악 취향을 충족시킬 유튜버',
  desc: (
    <p>
      음악의 다양한 매력을 느끼게 해주는 <br /> 음악을 사랑하는 이들을 위한
      열정이 가득한 유튜버들을 만나보세요.
    </p>
  ),
  link: '자세히 보기',
};

const youtubeItem = [
  {
    img: './assets/images/youtube/youtube01.svg',
    title: 'J Fla - To Me',
    // num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube02.svg',
    title: 'Yesterday - The Beatles',
    // num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube03.svg',
    title: '봄의 고백 - Yeahshine',
    // num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube04.svg',
    title: 'Bohemian Rhapsody - Sungha Jung',
    // num: 'dkelkt442',
  },
];

function YoutubeItem({ img, title }) {
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=ZS6HeUBNWVw">
        <img src={img} alt="" />
      </a>
      <span>{title}</span>
    </div>
  );
}

function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeText.title}</h3>
          <>{youtubeText.desc}</>
          <Link to="/" className="button-red">
            {youtubeText.link}
          </Link>
        </div>
        <div className="youtube__item">
          {youtubeItem.map((text, index) => (
            <YoutubeItem
              key={index}
              img={text.img}
              title={text.title}
              // num={text.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default YoutubeSection;
