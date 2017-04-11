// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#nav').outerHeight();

function hasScrolled() {
    var currentPosition = $(this).scrollTop();

    if (Math.abs(lastScrollTop - currentPosition) <= delta)
        return;

    if (currentPosition > lastScrollTop && currentPosition > navbarHeight) {
        $('#nav').removeClass("headroom--pinned").addClass("headroom--unpinned");
    } else {
        if (currentPosition + $(window).height() < $(document).height()) {
            $('#nav').removeClass("headroom--unpinned").addClass("headroom--pinned");
        }
    }

    lastScrollTop = currentPosition;
}


$(document).ready(function () {

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

})
