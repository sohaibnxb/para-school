$('.screens-slider').slick({
    centerMode: true,
    centerPadding: '20px',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
        {
            breakpoint: 1919,
            settings: {
                centerPadding: '10px',
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1440,
            settings: {
                centerPadding: '10px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '10px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ]
});


$('.testimonials-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: "<button class='prev-arrow' aria-hidden='true'><i class='fa-solid fa-chevron-right'></i></button>",
    nextArrow: "<button class='next-arrow' aria-hidden='true'><i class='fa-solid fa-chevron-left'></i></button>",
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '10px',
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});