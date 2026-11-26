let activeObserver: IntersectionObserver | null = null;

export function initializeReveal(options: { immediateInView?: boolean } = {}) {
  activeObserver?.disconnect();
  activeObserver = null;

  const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealTargets.length && !reducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    activeObserver = observer;

    revealTargets.forEach((target) => {
      const delay = Number(target.dataset.revealDelay);
      if (Number.isFinite(delay) && delay > 0) {
        target.style.setProperty("--reveal-delay", `${Math.min(delay, 8) * 90}ms`);
      }
      if (options.immediateInView && target.getBoundingClientRect().top < window.innerHeight + 80) {
        target.classList.add("is-visible");
      } else {
        observer.observe(target);
      }
    });

    document.documentElement.classList.add("motion-ready");
  }
}
