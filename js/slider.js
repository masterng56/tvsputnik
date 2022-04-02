$(document).ready(function() {
    $('.devices_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 2661,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: true,
                    arrows: false

                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: true,
                    arrows: false
                }
            },

            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    variableWidth: true,
                    arrows: false

                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    variableWidth: true,
                    arrows: false

                }
            },

        ]
    });

    $('.reviews_slider').slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false
            }
        }],
    });
});