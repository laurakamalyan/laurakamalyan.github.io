$(function(){
    // Header SlideShow
    $('.slider').slick({
        arrows: true,
        dots: false,
        speed: 400,
        infinite: true,
        prevArrow: '<a class="btn btn-prev"><i class="fa-solid fa-angle-left"></i></a>',
        nextArrow: '<a class="btn btn-next"><i class="fa-solid fa-angle-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 1500,
    });
    
    
    // Our projects carousel
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<a class="btn btn-prev"><i class="fa-solid fa-chevron-left"></i></a>',
        nextArrow: '<a class="btn btn-next"><i class="fa-solid fa-chevron-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Header SlideShow
    $('.slider3').slick({
        arrows: false,
        dots: true,
        speed: 400,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
});