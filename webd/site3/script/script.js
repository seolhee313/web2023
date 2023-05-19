$(function(){
    //메뉴
    $(".nav > ul > li").mouseenter(function(){
        $(this).find("ul").stop().slideDown(400);
        $("#header .container").addClass("on");
    });
    
    $(".nav > ul > li").mouseleave(function(){
        $(this).find("ul").stop().slideUp(100);
        $("#header .container").removeClass("on");
    });

    // 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $(".sliderWrap");   // 이미지 보관: 움직이는 영역
    const $slider = $(".slider");           // 각각의 이미지
    const $sliderHeight = $slider.height(); // 이미지 세로값

    $sliderWrap.prepend($slider.last().clone(true));
    $sliderWrap.css("margin-top", `-${$sliderHeight}px`);

    setInterval(function(){
        currentIndex++; // 현재 이미지를 1씩 증가
        $sliderWrap.animate({marginTop: `-${$sliderHeight * currentIndex}px`}, 600);

        if (currentIndex === $slider.length) {
            setTimeout(function(){
                $sliderWrap.css("margin-top", `-${$sliderHeight}px`);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});