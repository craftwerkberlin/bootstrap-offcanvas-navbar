

window.onresize = function () {
// jQuery Workaround, will be replaced by pure JavaScript
// Data attribute to hide offcanvas and enable body scroll on resize through the breakpoints
    $('[data-bs-hideresize="true"]').offcanvas('hide');   
}