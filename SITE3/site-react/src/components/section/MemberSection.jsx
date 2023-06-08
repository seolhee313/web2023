import React from 'react';

import { Link } from 'react-router-dom';

const memberTitle = {
  title: <h3>한국 대표 가수</h3>,
  desc: <p>한국을 대표하는 자랑스러운 가수들을 소개해드립니다.</p>,
};
const memberText = [
  {
    img: './assets/images/member/bts01.svg',
    title: 'BTS',
    color: 'member__body m1',
    link: ' 자세히 보기',
  },
  {
    img: './assets/images/member/blackpink01.svg',
    title: 'BLACK PINK',
    color: 'member__body m2',
    link: ' 자세히 보기',
  },
  {
    img: './assets/images/member/psy01.png',
    title: 'PSY',
    color: 'member__body m3',
    link: ' 자세히 보기',
  },
];

function MemberText({ img, color, title, link }) {
  return (
    <div className="member">
      <figure className="member__header">
        <img src={img} alt="" />
      </figure>
      <div className={color}>
        <h4>{title}</h4>
        <Link to="/member">{link}</Link>
      </div>
    </div>
  );
}

function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <>{memberTitle.title}</>
      <>{memberTitle.desc}</>

      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberText
            key={index}
            img={text.img}
            color={text.color}
            title={text.title}
            link={text.link}
          />
        ))}
      </div>
    </section>
  );
}

export default MemberSection;
