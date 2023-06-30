$(function(){
    $(".nav > ul > li").mouseover(function(){        
        $(".nav > ul > li > ul").stop().fadeIn();  
        $(".nav").addClass("on");  
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut();
        $(".nav").removeClass("on");  
    });
});

$(function(){
     // 이미지 슬라이드
     let currentIndex = 0;
    
     const $sliderWrap = $(".slider__wrap");
     const $slider = $(".slider__wrap .slider");
     const $sliderHeight = $slider.height();
     $sliderWrap.append($slider.first().clone(true));
     
     setInterval(function(){
         currentIndex++;
         $sliderWrap.animate({
             marginTop: -$sliderHeight * currentIndex
         },350);
 
         if(currentIndex === $slider.length){
             setTimeout(function(){
                 $sliderWrap.animate({marginTop: 0},0);
                 currentIndex = 0;
             }, );
         }
     }, 4000);

    //탭메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.on("click", function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});




function openPopup() {
    var popup = document.querySelector('.popup-view');
    popup.style.display = 'block';
}
  
function closePopup() {
    var popup = document.querySelector('.popup-view');
    popup.style.display = 'none';
}
  
var popupButtons = document.querySelectorAll('.popup-btn');
    popupButtons.forEach(function(button) {
    button.addEventListener('click', openPopup);
});