//MAIN TOP SLIDER

if ($(".main-top-slider").length) {
    $(document).ready(function () {
        var sliderTop = $('.main-top-slider');
        sliderTop.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: 3000,
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        }).slick("slickPause");


        var initialDelay = 5000;

        setTimeout(function() {
            sliderTop.slick("slickPlay");
        },initialDelay);

    });
}
var country = 'ua';
$(document).ready(function () {
    // here, the index maps to the error code returned from getValidationError - see readme
    var errorMap = [
        "Invalid number",
        "Invalid country code",
        "Too short",
        "Too long",
        "Invalid number"
    ];

    $.get( "https://ipapi.co/json", function( data ) {
        if(typeof data.country !== "undefined") {
            country = data.country;
        }
    }).always(function() {
        if ($(".phone").length) {
            var inputPhone = document.querySelector(".phone");
            var itiPhone = intlTelInput(inputPhone, {
                utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]
            });
        }

        if ($(".phone-subcribe").length) {
            var inputSubcribe = document.querySelector(".phone-subcribe");
            var itiSubcribe = intlTelInput(inputSubcribe, {
                utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]
            });
        }

        if ($(".phone-guest").length) {
            var inputGuest = document.querySelector(".phone-guest");
            var itiGuest = intlTelInput(inputGuest, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]

            });
        }

        if ($(".phone-work").length) {
            var inputGuest = document.querySelector(".phone-work");
            var itiGuest = intlTelInput(inputGuest, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]

            });
        }

        if ($("#phone2").length) {
            var input = document.querySelector("#phone2");
                // errorMsg = document.querySelector("#error-msg"),
                // validMsg = document.querySelector("#valid-msg");

            var iti = intlTelInput(input, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]
            });
        }
        if ($(".phone-popup-jobs").length) {
            var inputPhonePopupJobs = document.querySelector(".phone-popup-jobs");
            var itiPhonePopupJobs = intlTelInput(inputPhonePopupJobs, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: country,
                hiddenInput: 'phone_full',
                preferredCountries: ["ua","pl"]
            });
        }

    });
});

        // var reset = function () {
        //     input.classList.remove("error");
        //     errorMsg.innerHTML = "";
        //     errorMsg.style.display = "none";
        //     validMsg.style.display = "none";
        // };

// on blur: validate
//         input.addEventListener("blur", function () {
//             reset();
//             if (input.value.trim()) {
//                 if (iti.isValidNumber() && !isNaN(iti.getNumber())) {
//                     validMsg.style.display = "";
//                 } else {
//                     input.classList.add("error");
//                     var errorCode = iti.getValidationError();
//                     errorMsg.innerHTML = errorMap[errorCode];
//                     errorMsg.style.display = "";
//                 }
//             }
//         });


//NEW JS
$(document).ready(function () {
//MOB MENU
    $('.show-menu').on('click', function () {
        $('.header').find('div.desc-header.flex').toggleClass('active');
        $(this).toggleClass('active');
    });
    $(document).mouseup(function (e) {
        var containerHeader = $("header.header");
        var menuHide = $("div.desc-header.flex");
        var menuHideBtn = $(".show-menu");
        if (containerHeader.has(e.target).length === 0){
            menuHide.removeClass('active');
            menuHideBtn.removeClass('active');
        }
    });
//TAB FOR SLIDER BLOCK
    if ($(".tab-section").length) {
        $('.tab-section').each(function () {
            let ths = $(this);
            ths.find('.b-tab').not(':first').addClass('hidden');
            ths.find('.b-nav-tab').click(function () {
                ths.find('.b-nav-tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.b-tab').addClass('hidden').eq($(this).index()).removeClass('hidden')
                ths.find('.product_slider').slick('setPosition');
            }).eq(0).addClass('active');
        });
    }
    if ($(".steps-slider").length) {
        if (window.innerWidth <= 1270) {
            $(document).ready(function () {
                $('.steps-slider').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    responsive: [
                        {
                            breakpoint: 1270,
                            settings: {
                                infinite: false,
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                infinite: false,
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                infinite: false,
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 668,
                            settings: {
                                infinite: false,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                                dots: true,
                                infinite: false
                            }
                        }
                    ]
                });
            });
        }
    }

    if ($(".command-slider").length) {
        $(document).ready(function () {
            $('.command-slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    }


    if ($(".command-slider").length) {
        $(document).ready(function () {
            $('.command-slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    }

    if ($(".worker-slider").length) {
        $(document).ready(function () {
            $('.worker-slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    }

    if ($(".partners-slider-logos").length) {
        $(document).ready(function(){
            $('.partners-slider-logos').slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 6
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 5,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    }
                ]
            });
        });
    }
    if ($(".partners-slider").length) {
        $(document).ready(function () {
            $('.partners-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                centerMode:true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    }
                ]
            });
        });
    }
//SLIDER NAV

    if ($(".slider-for").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.slider-nav',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            dots: false,
            focusOnSelect: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical: false,
                        verticalSwiping: false
                    }
                }
            ]
        });
    }


//HIDE ACARDION ORDER
    if ($(".accordion-item-head").length) {
        $(".accordion-item-head").on('click', function () {
            $(this).toggleClass('active');
            $(this).siblings('div.accordion-item-body').slideToggle('', initMap);
        });
    }

//VIDEO
    if ($(".video_play").length) {
        $(document).ready(function () {
            $(document).on('click', ".video_play", (e) => {
                const $bnt = $(e.target).closest('.video_play');
                var dataYoutube = $bnt.parents('.blog-card_video-youtube').attr('data-youtube');
                $bnt.parents('.blog-card_video-youtube').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });
        });
    }


//LANG
    if ($(".lang-currency").length) {
        $(".lang-currency").on('click', function () {
            $(this).toggleClass('active');
            $(this).siblings('ul.lang-item').slideToggle('');
        });
    }

//FILTER

    $('.show-filter').on('click', function () {
        $('.search-cont').find('div.aside').toggleClass('active');
    });


    $('.filter-top .close').on('click', function () {
        $('.search-cont').find('div.aside').toggleClass('active');
    });
});

//FIXED BUTTON
if ($("#button-mob-fixed").length) {
    $(document).ready(function () {
        var s = $("#button-mob-fixed");
        $(window).scroll(function () {
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            if (scrollBottom < 150 ) {
                s.removeClass("visible");
            } else {
                s.addClass("visible");
            }
        });
    });
}
