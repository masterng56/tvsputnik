$(document).ready(function() {
    $('.devices_slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 2661,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    variableWidth: false

                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
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
                    slidesToScroll: 2,
                    variableWidth: true,
                    arrows: false

                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false
            }
        }],
    });
});