import React from 'react';

const mvText = [
  {
    mvImg: './assets/images/mv/mv01.svg',
    iconImg: './assets/images/mv/mv01_01.svg',
    title: '(여자)아이들((G)I-DLE) - 퀸카',
    desc: '조회수 9543만회 · 2주 전',
  },
  {
    mvImg: './assets/images/mv/mv02.svg',
    iconImg: './assets/images/mv/mv02_01.svg',
    title: "aeapa 에스파 'Spicy' MV",
    desc: '조회수 7976만회 · 3주 전',
  },
  {
    mvImg: './assets/images/mv/mv03.svg',
    iconImg: './assets/images/mv/mv03_01.svg',
    title: "IVE 아이브 'Kitsch' MV",
    desc: '조회수 6967만회 · 2개월 전',
  },
  {
    mvImg: './assets/images/mv/mv04.svg',
    iconImg: './assets/images/mv/mv04_01.svg',
    title: "LE SSERAFIM (르세라핌) 'UNFORGIVEN'",
    desc: '조회수 7146만회 · 4주 전',
  },
  {
    mvImg: './assets/images/mv/mv04.svg',
    iconImg: './assets/images/mv/mv04_01.svg',
    title: 'BLACKPINK - ‘Pink Venom’ M/V',
    desc: '조회수 6.4억회 · 9개월 전',
  },
  {
    mvImg: './assets/images/mv/mv04.svg',
    iconImg: './assets/images/mv/mv04_01.svg',
    title: "NewJeans (뉴진스) 'Attention' MV",
    desc: '조회수 4918만회 · 10개월 전',
  },
];

function MvDesc({ mvImg, iconImg, title, desc }) {
  return (
    <div className="mv">
      <figure className="mv__header">
        <a href="https://www.youtube.com/watch?v=6ZUIwj3FgUY">
          <img src={mvImg} alt="" />
        </a>
      </figure>
      <div className="mv__body">
        <div className="pic">
          <img src={iconImg} alt="" />
        </div>
        <div className="title">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}

function MvSection(props) {
  return (
    <section id="mvSection" className={props.attr}>
      <h3>뮤직비디오 구경하기</h3>
      <p>
        음악의 감동을 두배로! 영상으로 즐기는 음악! 뮤직비디오를 감상해보세요.
      </p>
      <div className="mv__inner container">
        <div className="mv__btn">
          <ul>
            <li>
              <a href="/" className="active">
                K-pop
              </a>
            </li>
            <li>
              <a href="/">Pop</a>
            </li>
            <li>
              <a href="/">Hip-hop</a>
            </li>
            <li>
              <a href="/">R&B</a>
            </li>
          </ul>
        </div>
        <div className="mv__conts">
          {mvText.map((text, index) => (
            <MvDesc
              key={index}
              mvImg={text.mvImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MvSection;
