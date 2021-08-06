// Progressbar javascript
var pbars = document.querySelectorAll('[data-width]');
for (var i = 0; i < pbars.length; i++) {
    var pbar = pbars[i];
    pbar.setAttribute('style', 'width:' + pbar.getAttribute('data-width') + ';');
}

// Fullscreen
var fscreenbtn = document.querySelector('.fullscreen-btn');
fscreenbtn.addEventListener('click', function () {
    if (fscreenbtn.hasAttribute('full')) {
        fscreenbtn.removeAttribute('full');
        closeFullscreen();
    }
    else {
        fscreenbtn.setAttribute('full', 'true');
        openFullscreen();
    }
});

/* View in fullscreen */
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}