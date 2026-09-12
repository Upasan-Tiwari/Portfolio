// Minimal, dependency-free. One job: toggle the mobile nav.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.rail__toggle');
  var nav = document.querySelector('.rail nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu after a nav link is chosen (mobile).
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
