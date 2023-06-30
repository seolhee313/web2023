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
        
    const $sliderWrap = $("#slider .slider__wrap");
    const $slider = $(".slider");
    const $sliderImg = $(".slider img");
    const $sliderHeight = $sliderImg.height();
    console.log($sliderHeight);
    $sliderWrap.append($slider.first().clone(true));

    let currentIndex = 0;
    setInterval(function(){
        currentIndex++;
        
        $sliderWrap.animate({top: -$sliderHeight * currentIndex}, 600);

        console.log(currentIndex);
        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({top: 0}, 0);
                currentIndex = 0;
            });            
        };
    }, 3000);

     // 모달창
     $(".link").click(function(){
        $(".modal").show();
    })
    $(".modal a").click(function(){
        $(".modal").hide();
    })
});