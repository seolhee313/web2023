$(".nav > ul > li").mouseover(function(){        
    $(this).find(".submenu").stop().slideDown();  
});

$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});

$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));  //첫번째 이미지를 복사해서 마지막에 추가

    setInterval(function(){     //3초에 한번씩 실행   
        currentIndex++;     //현재 이미지를 1씩 증가
        $(".sliderWrap").animate({marginTop: -currentIndex * 400 + "px"}, 600);     //이미지 애니메이션

        if(currentIndex == 3){  //마지막 이미지
            setTimeout(function(){
                $(".sliderWrap").animate({ marginTop:0 }, 0);   //애니메이션 초기화
                currentIndex = 0;   //현재 이미지를 초기화
            }, 700)
        }
    }, 3000);
});

$(function(){
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});