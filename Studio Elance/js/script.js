document.addEventListener('DOMContentLoaded', () => {
  // === ANIMATION AU SCROLL ===
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Cibler tous les éléments avec animation au scroll
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-on-scroll, .services-table-wrapper');
  fadeElements.forEach(el => observer.observe(el));

  // === CARROUSEL DES TÉMOIGNAGES ===
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length > 0) {
    let currentIndex = 0;
    let isAnimating = false;

    testimonials[currentIndex].classList.add('active');

    setInterval(() => {
      if (isAnimating) return;
      isAnimating = true;

      const current = testimonials[currentIndex];
      const nextIndex = (currentIndex + 1) % testimonials.length;
      const next = testimonials[nextIndex];

      next.classList.add('enter-left');
      next.offsetHeight; // force reflow

      current.classList.add('exit-right');
      current.classList.remove('active');

      next.classList.remove('enter-left');
      next.classList.add('active');

      setTimeout(() => {
        current.classList.remove('exit-right');
        isAnimating = false;
        currentIndex = nextIndex;
      }, 900);
    }, 7000);
  }
});


