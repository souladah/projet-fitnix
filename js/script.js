// Menu hamburger (mobile) — commun à toutes les pages
document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.navbar');
    var btn = nav && nav.querySelector('.menu-toggle');
    if (!btn) return;

    function setOpen(open) {
        nav.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function () {
        setOpen(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () { setOpen(false); });
    });
});
