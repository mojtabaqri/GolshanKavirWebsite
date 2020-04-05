$(document).ready(function () {
    //-----------------------------------------------Slider--------------------------------------------
$(".item-holder").owlCarousel({
    item:3,
    center:true,
    nav: false,
    dots: false,
});
    var owl = $('.item-holder');
    owl.owlCarousel();
    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
    //-----------------------------------------------Slider--------------------------------------------

});