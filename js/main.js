document.addEventListener('DOMContentLoaded', function () {

    //add shadow to the navigation
    const navbar = document.querySelector('.navbar')

    function addShadowNav() {
        if (window.scrollY >= 300) {
            navbar.classList.add('shadow-bg')
        } else {
            navbar.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadowNav)

    //fixes mobile navigation (when you click out of the navigation then navigation will be closed)
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    //carousel from slick.js

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

//set Height of all offer-box to the height of the highest offer-box
const offerBoxes = document.body.querySelectorAll('.offer-box')
const setHeightofferBox = () => {
    const box = []
    for (const offerBox of offerBoxes) {
        box.unshift(offerBox.offsetHeight)
    }
    for (const offerBox of offerBoxes) {
        offerBox.style.height = `${Math.max(...box)}px`
    }
}
addEventListener('resize', setHeightofferBox)
addEventListener('load', setHeightofferBox)



//opens and closes offer(announcement_wrap)
const offer = document.body.querySelectorAll('.announcement_wrap')
const offerClose = document.body.querySelectorAll('.close_announcement')
const offerBoxButton = document.body.querySelectorAll('.btn-offer')


//open announcement_wrap
offerBoxButton.forEach(el => {
    el.addEventListener('click', () => {
        const lastClassOfferBoxButton = el.className.split(' ') //make array from classes of button
        const x = lastClassOfferBoxButton[lastClassOfferBoxButton.length - 1]; //get the last class of button
        offer.forEach(el => {// change display of right announcement_wrap to flex 
            if (el.classList.contains(`${x}`)) {
                el.style.display = 'flex'
            }

        })
    })
})
//close announcement_wrap
offerClose.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.style.display = 'none'
    })
})