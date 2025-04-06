jQuery(document).ready(function ($) {
    if ($(window).width() > 428) {
        $('.video-category').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        infinite: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        // On before slide change
        $('.video-category').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          if(nextSlide > currentSlide) {
              var catid = slick.$slider.data('id');
              var limit = 1;
              var page = slick.$slides.length / limit + 1;
              var lang = $('html').attr('lang');
              if(lang === 'ru') {
                  lang = '';
              } else {
                  lang = '/' + lang;
              }
              $.get(lang + "/video/slide/" + catid + "/" + page + "/" + limit, function(data, status){
                if( status === 'success' && data != '') {
                   slick.$slider.slick('slickAdd','<div><div>' + data + '</div></div>');
                }
            });
          }
        });
    }

    $('.video-category-btn-see-all').click(function () {
        var catid = $(this).data('categ');
//        $('#' + catid + ' .video-category').addClass('is-active');
        $('#' + catid + ' .video-category-video').removeClass('is-mobile-hidden');
        $('#' + catid + ' .video-category-btn.is-hidden').removeClass('is-hidden');
        $(this).addClass('is-hidden');
    });
    $('.video-category-btn-hide-all').click(function () {
        var catid = $(this).parent('.video-category-wrap').attr('id');
//        $('#' + catid + ' .video-category').removeClass('is-active');
        $('#' + catid + ' .video-category-video').addClass('is-mobile-hidden');
        $('#' + catid + ' .video-category-video.is-first').removeClass('is-mobile-hidden');
        
        $('#' + catid + ' .video-category-btn').addClass('is-hidden');
        $('#' + catid + ' .video-category-btn-see-all').removeClass('is-hidden');
        $('html, body').animate({
            scrollTop: $('#' + catid).offset().top - 75
        }, 300);
    });
});
