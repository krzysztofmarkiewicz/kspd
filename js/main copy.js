document.addEventListener('DOMContentLoaded', function () {

    //dodaje cień do nawigacji
    const navbar = document.querySelector('.navbar')

    function addShadowNav() {
        if (window.scrollY >= 300) {
            navbar.classList.add('shadow-bg')
        } else {
            navbar.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadowNav)

    //skrypt naprawiający nawigację, zamyka się po kliknięciu gdziekolwiek na mobilce
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    //karuzela ze slick.js

    $('.carousel-slick').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        mobileFirst: true,
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
    

});