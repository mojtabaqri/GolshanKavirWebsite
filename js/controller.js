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
    $('#prev').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#next').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
    //-----------------------------------------------Slider--------------------------------------------
//-------------------- Sticky Nav
    $(document).scroll(function () {
     let percent=12;
     let scrollFromTop=$(this).scrollTop();
     let middle=$(document).height()*percent/100;
     console.log(middle);
     if(scrollFromTop > middle)
         $(".sticky-nav").fadeIn("2000");
     else
         $(".sticky-nav").fadeOut("2000");
    });
//-------------------- Sticky Nav
    AOS.init();
});
