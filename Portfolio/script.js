$(document).ready(function() {
    // Function to update the padding of the second row based on the height of the first row
    function updatePadding() {
        var previousRowHeight = $("#profile").prev().outerHeight();
        $("#profile").css("padding-top", previousRowHeight + "px");
    }

    // Update the padding on document ready
    updatePadding();

    // Update the padding on window resize
    $(window).resize(function() {
        updatePadding();
    });
});






$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var headerHeight = $('#header').outerHeight();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - headerHeight
        }, 500, 'easeInOutExpo'); // Adjust the duration and easing as needed
    });
});





// script.js

document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-200px"; // Adjust the height of the header
            document.getElementById("profile").style.top = "0";
        }

        prevScrollPos = currentScrollPos;
    };
});









function send_msg() {
    alert("Sorry. This page has not developed yet.");
  }