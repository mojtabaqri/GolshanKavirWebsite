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
//-------------------- Sticky Nav
    $(document).scroll(function () {
     let percent=12;
     let scrollFromTop=$(this).scrollTop();
     let middle=$(document).height()*percent/100;
     console.log(middle);
     if(scrollFromTop > middle)
         $(".sticky-nav").show("2000");
     else
         $(".sticky-nav").hide("2000");
    })
//-------------------- Sticky Nav
});