(function () {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.querySelector('.navbar-collapse');
      if (nav && nav.classList.contains('show')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });

  if (window.AOS) {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }
})();
