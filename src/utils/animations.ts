// Reveal elements with the .reveal class as they enter the viewport.
// A MutationObserver picks up elements rendered later (e.g. filtered lists).
export const observeIntersection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  const scan = () => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => {
      observer.observe(element);
    });
  };

  scan();
  const mutationObserver = new MutationObserver(scan);
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
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

// Animate a number from 0 to target, calling onUpdate on every frame
export const animateCounter = (
  target: number,
  onUpdate: (value: number) => void,
  duration = 1600
) => {
  const start = performance.now();
  let frame = 0;

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    onUpdate(Math.round(target * eased));
    if (progress < 1) {
      frame = requestAnimationFrame(tick);
    }
  };

  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
};
