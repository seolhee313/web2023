$(function() {
    let currentIndex = 0;
    const $sliderWrap = $(".sliderWrap");
    const $slider = $(".slider");
    const totalSlides = $slider.length;

    function updateSlideCount() {
        let displayIndex = currentIndex % totalSlides + 1;
        const countText = displayIndex + " / " + totalSlides;
        $(".slide-count").text(countText);
    }

    $sliderWrap.append($slider.first().clone(true));

    let slideInterval = setInterval(function() {
        currentIndex++;
        $sliderWrap.animate({ marginLeft: -100 * currentIndex + "%" }, 600);

        if (currentIndex == totalSlides) {
            setTimeout(function() {
                $sliderWrap.animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 700);
        }

        updateSlideCount();
    }, 3000);

    const btnPlay = document.querySelector('.btn-play');
    btnPlay.addEventListener('click', function() {
        btnPlay.classList.toggle('on');
        if (btnPlay.classList.contains('on')) {
            clearInterval(slideInterval);
        } else {
            slideInterval = setInterval(function() {
                currentIndex++;
                $sliderWrap.animate({ marginLeft: -100 * currentIndex + "%" }, 600);

                if (currentIndex == totalSlides) {
                    setTimeout(function() {
                        $sliderWrap.animate({ marginLeft: 0 }, 0);
                        currentIndex = 0;
                    }, 700);
                }

                updateSlideCount();
            }, 3000);
        }
    });

    $('.snb-more').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.snb-wrap').toggleClass('active');
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var headerMenu = $('.header__menu');
        var subMenu = $('.snb-wrap');
        
        if (scrollTop > 0) {
            headerMenu.addClass('fixed');
            subMenu.addClass('fixed');
        } else {
            headerMenu.removeClass('fixed');
            subMenu.removeClass('fixed');
        }
    });
});
