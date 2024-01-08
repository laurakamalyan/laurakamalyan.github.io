// Menu
$(function(){
   $('#glyp').on('click', function(){
       $('#right').slideToggle();
   }); 
});


$(function () {
  $('.navbar-collapse').css({ 
    maxHeight: $(window).height() - $('.navbar-header').height() + 'px'
  });
});

// Popover 
$(function(){
    $('[data-toggle="popover"]').popover();
});

// Slide down page
$(document).ready(function(e){
    $('.slide-section').click(function(){
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);       
        return false;
    });    
});

// Nav marker 
(function(){
    var navLinks = $('.slide-section'),
        navH = $('#responsive-menu').height(),
        section = $('section'),
        documentEl = $(document);
    
    documentEl.on('scroll', function(){
        var currentScrollPos = documentEl.scrollTop();
        
        section.each(function(){
            var self = $(this);
            if(self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight())){
                var targetClass = '#' + self.attr('id') + '-marker';
                navLinks.removeClass('active');
                $(targetClass).addClass('active');
            }
        });
    });
})();

// Set Home height
function setHomeHeight() {
    $('#home').css({
        height: $(window).height() + 'px'
    });
}
setHomeHeight();
$(window).resize( setHomeHeight ); 

// Typed
$(function(){
    var options = {
    strings: [
        "Order your services"], typeSpeed: 40, loop: true
    }
    
    var typed = new Typed(".type", options);
});

// Works
$('.xs-hide-glyp').on('click', function(){
    $('.div-sect2').css({ 
        display: 'block'
    });
    $('.div-sect3').css({ 
        display: 'block'
    });
    document.getElementById('xs-hide-glyp').innerHTML = "";
});