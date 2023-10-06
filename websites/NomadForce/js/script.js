// Active navbar item on scroll
var navLinks = $('.nav-link');
var navH = $('#collapsibleNavbar').height();

$(document).on('scroll', function(){
    var currentScrollPos = $(document).scrollTop();

    $('section').each(function(){
                        
        if($(this).offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < ($(this).offset().top + $(this).outerHeight())){
            var targetClass = '#' + $(this).attr('id') + "-marker";
            navLinks.removeClass('active');
            $(targetClass).addClass('active');               
        }
    });
});



// Active navbar item on click
$('.slide-section').click(function(){
    $('.slide-section').removeClass('active');
    $(this).addClass('active');
});


// SlideShow in section 2
$(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        speed: 400,
        infinite: true,
        prevArrow: '<a class="btn btn-prev"><i class="fa-solid fa-angle-left"></i></a>',
        nextArrow: '<a class="btn btn-next"><i class="fa-solid fa-angle-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 1500,
    });
});


// Google Map
function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Animate element on scroll

$(window).scroll(function() {
    $('.fadeInUp_animation').each(function(){
        var pos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (pos < topOfWindow + 600) {
            $(this).css('visibility', 'visible');
            $(this).addClass('fadeInUp');
        }
    });
});