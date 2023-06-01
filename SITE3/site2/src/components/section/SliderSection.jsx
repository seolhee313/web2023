function SliderSection(props) {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <h3>
                SeolHee
                <br />
                Music
              </h3>
              <p>
                음악은 우리의 감정을 자유롭게 표현하고, 일상 속에서 우리를 위로하며,
                <br />
                새로운 세계로 데려다 주는 힘이 있습니다.
                <br />
                이제 우리는 즐기는 음악을 위해 새로운 온라인 음악 사이트를 소개합니다.
              </p>
              <a href="/" className="more button-blue">
                더 알아보기
              </a>
            </div>
            <div className="img" aria-label="hidden">
              <img src="./assets/images/icon/icon01.png" alt="이미지1" />
              <img src="./assets/images/icon/icon12.svg" alt="이미지2" />
              <img src="./assets/images/icon/icon11.svg" alt="이미지3" />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
        </div>
        <div className="slider__btn">
          <a href="/" className="left">
            <span className="ir">이전이미지</span>
          </a>
          <a href="/" className="right">
            <span className="ir">다음이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="/" className="dot active">
            <span className="ir">1번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">2번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">3번 이미지</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
