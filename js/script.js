// Change navbar color on scroll

$(function(){
    var scroll_pos = 0;

    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();

        if (scroll_pos > 0) {
            $('nav').css('background-color', '#fff');         
            $('nav').css('box-shadow', '0 0 30px 0 rgb(102, 94, 109)');       
            $('.nav-link').css('color', 'rgb(102, 94, 109)');         
        }
        else if (scroll_pos == 0 && $('body').width() > 575){
            $('nav').css('background-color', 'transparent'); 
            $('nav').css('box-shadow', '0 0 0 0');
            $('.nav-link').css('color', '#fff'); 
        }
    });
});


// Portfolio section slide

$(".responsive").slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<a class="btn btn-prev"><i class="fa-solid fa-chevron-left"></i></a>',
    nextArrow: '<a class="btn btn-next"><i class="fa-solid fa-chevron-right"></i></a>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


