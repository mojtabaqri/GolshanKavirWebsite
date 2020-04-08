function getData(yt_url, callback) {
    $.ajax({
        type: "GET",
        url: yt_url,
        success: callback,
        error: function (request, status, error) {
            alert(status);
        }
    })
}

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
    getData('http://localhost/date/date.php', function(response) {
        $('.date-holder span').html(response.date);
    });
//-------------------- Sticky Nav

});
