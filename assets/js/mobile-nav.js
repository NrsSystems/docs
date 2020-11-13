var closeNavbar = false;
function toggleNav() {
    closeNavbar ? closeNav() : openNav();
    closeNavbar = !closeNavbar;
}
function openNav() {
    document.getElementById("mobile-nav").style.width = "100vw";
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
}
