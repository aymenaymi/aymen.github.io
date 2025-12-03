// Scroll animations
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Project card click effects
document.querySelectorAll('.project-box').forEach(card => {
  card.addEventListener('click', function() {
    this.style.transform = 'translateY(-10px) scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
});

// Remove loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading-screen').style.opacity = '0';
    document.querySelector('.loading-screen').style.visibility = 'hidden';
  }, 1000);
});