$(function(){
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<a class="btn btn-prev"><i class="fa-solid fa-arrow-left-long"></i></a>',
        nextArrow: '<a class="btn btn-next"><i class="fa-solid fa-arrow-right-long"></i></a>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


// Slide top page
$(document).ready(function(e){
    $('.scroll_top_btn ').click(function(){
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);       
        return false;
    });    

});

 // Show scroll top button on scroll 
$(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        if ( $(this).scrollTop() > 200 ) {
            $('.scroll_top_btn').css('display', 'block'); 
        }
        else {
            $('.scroll_top_btn').css('display', ''); 
        }
    });
});


$(document).ready(function() {
    $("#email").validate();
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