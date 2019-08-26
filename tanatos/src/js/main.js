function openNav() {
    document.getElementById("menu").style.width = "100%";
}
function closeNav() {
    document.getElementById("menu").style.width = "0";
}

$(document).ready(function(){
    $('.top-slider').bxSlider({
        mode: 'vertical',
        wrapperClass: '',
        nextText: '<div class="arrow-box"><i class="arrow-down fas fa-chevron-down"></i></div>',
        nextSelector: '.arrow-down',
        pager: false,
        
    });

    $('.testimonials').bxSlider({
        wrapperClass: '',
        prevText: '<i class="testimonials-arrows__prev fas fa-chevron-left"></i>',
        nextText: '<i class="testimonials-arrows__next fas fa-chevron-right"></i>',
        prevSelector: '.testimonials-arrows__prev',
        nextSelector: '.testimonials-arrows__next',
        pager: false,
        
    });
});

$('.catherina').hover(function() {
    $('.selected-pager').removeClass('selected-pager')
    $('.select-catherina').addClass('selected-pager')
});

$('.harvey').hover(function() {
    $('.selected-pager').removeClass('selected-pager')
    $('.select-harvey').addClass('selected-pager')
});

$('.janet').hover(function() {
    $('.selected-pager').removeClass('selected-pager')
    $('.select-janet').addClass('selected-pager')
});

$('.kevin').hover(function() {
    $('.selected-pager').removeClass('selected-pager')
    $('.select-kevin').addClass('selected-pager')
});


