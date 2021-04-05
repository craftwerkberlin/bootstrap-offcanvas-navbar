
// Check if navbar fixed-top component exists
if ($(".navbar.fixed-top")[0]){
    // Add body class to hide default .offcanvas-backdrop::before if .navbar.fixed-top exists
    $("body").addClass("navbar-fixed-top-offcanvas");
} else {
    window.alert("No .navbar.fixed-top exists. Offcanvas uses default .offcanvas-backdrop::before body class.");
}

// Data attribute to hide offcanvas and enable body scroll on resize through the breakpoints
$(window).on('resize', function () {
    $('[data-bs-hideresize="true"]').offcanvas('hide');
});