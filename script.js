document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a, .button.large.scrolly, .button.scrolly');

    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      window.scroll({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });