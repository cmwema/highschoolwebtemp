(function($) {
    $(document).ready(function() {
        $('.slider-hero').slick({
            dots: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
            cssEase: 'linear',
            swipe: true,
            adaptiveHeight: true
        });
    });
    
})( jQuery );