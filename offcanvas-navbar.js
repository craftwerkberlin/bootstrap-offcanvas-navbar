
// Check if navbar fixed-top component exists
if ($(".navbar.fixed-top")[0]){
    // Add body class to hide default .offcanvas-backdrop::before
    $("body").addClass("navbar-fixed-top-offcanvas");
    // Add div for backdrop inside navbar, select first one only
    $( ".navbar:first" ).append('<div class="navbar-offcanvas-backdrop"></div>');
} else {
    window.alert("No navbar fixed-top used! Offcanvas uses default backdrop.");
}


// Data attribute to hide offcanvas on resize
$(window).on('resize', function () {
    $('[data-bs-hideresize="true"]').offcanvas('hide');
});