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

    $('.snb-more').click(function() {
        $('.snb-wrap').toggleClass('active');
    });

    $('.snb-more').click(function(e) {
        e.preventDefault(); // 기본 클릭 동작을 막기 위해 사용합니다.
        $(this).toggleClass('active');
    });
});
