export const observeIntersection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with the animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    element.classList.add('opacity-0');
    observer.observe(element);
  });

  return observer;
};

// Smooth scrolling utility
export const smoothScrollTo = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Lazy loading for images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

// Parallax effect for hero section
export const initParallax = () => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Animate counters
export const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target') || '0');
    const increment = target / speed;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.ceil(current).toString();
      }
    }, 1);
  });
};