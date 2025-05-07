// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Gallery zoom effect
  document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoom');
    });
  });
  