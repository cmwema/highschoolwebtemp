(function($) {
    $(document).ready(function() {
        $('.slider-hero-1').slick({
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            cssEase: 'linear',
            swipe: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            arrows: false
        });
    });
    
})( jQuery );