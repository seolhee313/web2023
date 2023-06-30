$(function(){
    // 슬라이더
    let currentIndex = 0;
    $(".slider__wrap").prepend($(".slider").last().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slider__wrap").animate({marginTop: 400 * currentIndex + "px"}, 600);

        console.log(currentIndex);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".slider__wrap").animate({marginTop: 0 }, 0);
                currentIndex = 0;
            }, 600)
        }
    }, 3000);

    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })

    // 팝업창
    $(".popup-btn").click(function(){
        $(".popup-view").show()
    })
    $(".popup-close").click(function(){
        $(".popup-view").hide()
    })
})