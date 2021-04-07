// Check if .navbar.fixed-top component exists
if (document.querySelector('.navbar.fixed-top') !== null) {
    // window.alert(".navbar.fixed-top exists. Offcanvas backdrop is set to .navbar::before");
    // Add body class to hide default .offcanvas-backdrop::before if .navbar.fixed-top exists
    document.body.classList.add("navbar-fixed-top-offcanvas");
} else {
    window.alert("No .navbar.fixed-top exists. Offcanvas uses default .offcanvas-backdrop::before body class.");
}

window.onresize = function () {
// jQuery Workaround, will be replaced by pure JavaScript
// Data attribute to hide offcanvas and enable body scroll on resize through the breakpoints
    $('[data-bs-hideresize="true"]').offcanvas('hide');   
}