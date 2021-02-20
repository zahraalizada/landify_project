// partners
$(".partners-slider").owlCarousel({
    autoplay: true,
    nav: true,
    dots: false,
    margin: 8,
    loop: true,
    items: 5,
    slideSleep: 1000,
    paginationSpeed: 1000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        380: {
            items: 2
        },
        480: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        }
    }
})