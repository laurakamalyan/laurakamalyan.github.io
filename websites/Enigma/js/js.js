// Typed
$(function(){
    var options = {
    strings: ["ENIGMA"], 
        typeSpeed: 80, 
        loop: true
    }
    
    var typed = new Typed(".type", options);
});

// Modal window subscribe 
function subscribe() {       
    document.getElementById('subscribing').innerHTML = "Thanks for Subscribing!";    
    document.getElementById('title-modalWindow').innerHTML = "";
}