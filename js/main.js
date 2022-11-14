$(document).ready(function () {
    var owl = $('.owl-carousel')
    owl.owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        margin:20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
