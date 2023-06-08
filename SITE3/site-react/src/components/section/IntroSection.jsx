import React from 'react';

const introTitle = {
  sub: <span>Music Genres</span>,
  title: (
    <h3>
      Music 4 U<br />
      장르음악
    </h3>
  ),
  desc: (
    <p>
      음악은 다양한 장르들로 이루어져 있습니다. <br />그 다양한 음악 장르를
      소개합니다. <br /> 즐거운 음악 여행을 시작해봅시다!
    </p>
  ),
};

const introText = [
  {
    iconClass: 'icon-bg1',
    title: '팝 (Pop)',
    desc: '팝은 대중적인 음악 장르로, 널리 알려진 가수와 인기 있는 멜로디, 재치 있는 가사를 특징으로 합니다. 팝음악은 다양한 스타일과 장르의 요소를 결합하여 다채로운 음악을 만들어냅니다. 주로 라디오와 상업 음악산업에서 많이 접할 수 있으며, 청취자들에게 일상에서 즐길 수 있는 캐치한 곡들을 제공합니다.',
  },
  {
    iconClass: 'icon-bg2',
    title: '댄스 (Dance)',
    desc: '댄스는 리듬과 비트에 맞춰 춤을 추기 위해 만들어진 음악 장르입니다. 댄스 음악은 주로 클럽이나 파티에서 즐겨들리며, 흥겨운 리듬과 중독성 있는 멜로디, 풍부한 비트가 특징입니다. 댄스 음악은 다양한 장르에서 파생되며, DJ와 프로듀서들이 리믹스하거나 새로운 음악을 만들어 내는 과정에서 발전해 왔습니다.',
  },
  {
    iconClass: 'icon-bg3',
    title: '힙합 (Hip-hop)',
    desc: '힙합은 리듬과 랩을 중심으로 한 음악 장르로, 가사에 주목할 만한 중요성을 두고 있습니다. 힙합 음악은 강한 리듬과 특색 있는 비트, 개성 있는 랩 스타일로 이루어져 있으며, 자아 표현과 사회적인 문제에 대한 이야기를 전달하는 데 중점을 둡니다. 힙합은 다양한 서브 장르를 가지고 있으며, 다양한 아티스트들이 이를 통해 자신의 음악적 아이덴티티를 구축하고 있습니다.',
  },
  {
    iconClass: 'icon-bg4',
    title: '알앤비 (R&B)',
    desc: '알앤비는 리듬과 블루스의 영향을 받은 음악 장르로, 감성적이고 몽환적인 멜로디와 소울풀한 보컬이 특징입니다. 알앤비 음악은 사랑, 감정, 관계 등을 주로 다루며, 부드러운 리듬과 섬세한 보컬 스타일을 가지고 있습니다. 다양한 아티스트들이 알앤비 장르에서 성공을 거두었으며, 현대 팝 음악에도 큰 영향을 미치고 있습니다.',
  },
];

function IntroDesc({ iconClass, title, desc }) {
  return (
    <div>
      <h4 className={iconClass}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <div>
            <>{introTitle.sub}</>
            <>{introTitle.title}</>
            <>{introTitle.desc}</>
          </div>
        </div>

        <div className="intro__desc">
          {introText.map((text, index) => (
            <IntroDesc
              key={index}
              iconClass={text.iconClass}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
