//선택자
const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = sliderWrap.querySelector(".slider__img");         //보여지는 영역
const sliderInner = sliderWrap.querySelector(".slider__inner");  //움직이는 영역
const slider = sliderWrap.querySelectorAll(".slider");              //개별 이미지

let currentIndex = 0;               //현재 보이는 이미지
let sliderCount = slider.length;    //이미지 갯수
let sliderInterval = 2000;          //이미지 변경 간격 시간

// 트랜지션 설정 좌
sliderInner.style.transition = "all 0.6s";

setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderCount;

    sliderInner.style.transform = "translateX("+ -1000 * currentIndex + "px)";

}, sliderInterval);


//트랜지션 설정 상 아래서 위  //.slider__img 안에 display: flex;, flex-wrap: wrap; 주석처리해야함.
// sliderInner.style.transition = "all 0.6s";

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % sliderCount;

//     sliderInner.style.transform = "translateY("+ -400 * currentIndex + "px)";

// }, sliderInterval);

 