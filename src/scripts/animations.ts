import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

let activeCleanups: (() => void)[] = [];

export function cleanupAnimations() {
  activeCleanups.forEach((fn) => fn());
  activeCleanups = [];
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.from(".hero-identity", { y: 20, opacity: 0, duration: 0.7 })
    .from(".hero h1 .line > span", { yPercent: 115, duration: 1.1, stagger: 0.12 }, "-=0.45")
    .from(".hero-lead", { y: 22, opacity: 0, duration: 0.8 }, "-=0.7")
    .from(".hero .actions > *", { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.6")
    .from(".portrait-wrap", { y: 40, opacity: 0, scale: 0.94, duration: 1.2 }, 0.25)
    .from(".tech-strip > *", { y: 14, opacity: 0, duration: 0.6, stagger: 0.06 }, "-=0.8")
    .from(".site-nav", { yPercent: -100, duration: 0.8 }, 0);
  activeCleanups.push(() => tl.kill());
}

function parallax() {
  const mm = gsap.matchMedia();
  const galaxy = document.querySelector<HTMLElement>(".hero-galaxy[data-parallax]");
  if (galaxy) {
    const factor = Number(galaxy.dataset.parallax) || -0.08;
    gsap.to(galaxy, {
      y: () => factor * window.innerHeight * 2,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  }
  mm.add("(min-width: 901px)", () => {
    const portrait = document.querySelector<HTMLElement>(".portrait-wrap[data-parallax]");
    if (!portrait) return;
    gsap.to(portrait, {
      y: () => -Math.min(44, window.innerHeight * 0.05),
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  });
  activeCleanups.push(() => mm.revert());
}

function scrollProgress() {
  const bar = document.querySelector<HTMLElement>(".scroll-progress");
  const nav = document.querySelector<HTMLElement>(".site-nav");
  if (!bar) return;
  nav?.classList.toggle("is-compact", window.scrollY > 40);
  gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });
  ScrollTrigger.create({
    start: 40,
    end: "max",
    onUpdate: (self) => nav?.classList.toggle("is-compact", self.scroll() > 40),
  });
}

function counters(immediateInView: boolean) {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? "";
    if (reduced || (immediateInView && el.getBoundingClientRect().top < window.innerHeight + 80)) {
      el.textContent = `${end}${suffix}`;
      return;
    }
    const state = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => gsap.to(state, { v: end, duration: 1.6, ease: "power2.out", onUpdate: () => { el.textContent = `${Math.round(state.v)}${suffix}`; } }),
    });
  });
}

function timeline() {
  const line = document.querySelector<HTMLElement>(".timeline-line");
  if (!line) return;
  gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 75%", end: "bottom 60%", scrub: true } });
}

function sectionHeadings() {
  gsap.utils.toArray<HTMLElement>(".section-label").forEach((label) => {
    gsap.fromTo(label, { "--line": 0 }, { "--line": 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: label, start: "top 90%", once: true } });
  });
}

function tilt() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
    const max = Number(el.dataset.tiltMax) || 8;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max * 1.4}deg) translateZ(0)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

function magnetic() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.28);
      y((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener("pointerleave", () => { x(0); y(0); });
  });
}

function cursorGlow(signal: AbortSignal) {
  if (!finePointer) return;
  document.querySelectorAll(".cursor-glow").forEach((el) => el.remove());
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);
  const x = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
  const y = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });
  window.addEventListener("pointermove", (e) => { glow.classList.add("is-on"); x(e.clientX); y(e.clientY); }, { passive: true, signal });
  document.addEventListener("pointerleave", () => glow.classList.remove("is-on"), { signal });
  activeCleanups.push(() => glow.remove());
}

function stars(signal: AbortSignal) {
  const canvas = document.querySelector<HTMLCanvasElement>(".stars");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;
  let w = 0, h = 0, running = false, raf = 0;
  type Star = { x: number; y: number; r: number; a: number; s: number; p: number };
  let list: Star[] = [];
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(120, (w * h) / 14000));
    list = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.3 + 0.3, a: Math.random() * 0.6 + 0.2, s: Math.random() * 0.02 + 0.005, p: Math.random() * 6.28 }));
  };
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    for (const s of list) {
      const tw = reduced ? 1 : 0.55 + 0.45 * Math.sin(t * s.s + s.p);
      ctx.globalAlpha = s.a * tw;
      ctx.fillStyle = "#cfe8f3";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      if (!reduced) { s.y -= s.s * 3; if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; } }
    }
    if (running && !reduced) raf = requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize, { signal });
  if (reduced) { draw(0); return; }
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) { running = true; raf = requestAnimationFrame(draw); }
    else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
  });
  io.observe(canvas);
  activeCleanups.push(() => {
    running = false;
    cancelAnimationFrame(raf);
    io.disconnect();
  });
}

function projectFilters(signal: AbortSignal) {
  const group = document.querySelector<HTMLElement>(".project-filters");
  const pill = group?.querySelector<HTMLElement>(".filter-pill");
  const buttons = [...(group?.querySelectorAll<HTMLButtonElement>(".pfilter") ?? [])];
  const cards = [...document.querySelectorAll<HTMLElement>(".project-card")];
  if (!group || !pill) return;
  const movePill = (btn: HTMLElement) => { pill.style.width = `${btn.offsetWidth}px`; pill.style.transform = `translateX(${btn.offsetLeft}px)`; };
  const active = () => buttons.find((b) => b.classList.contains("is-active")) ?? buttons[0];
  movePill(active());
  window.addEventListener("resize", () => movePill(active()), { signal });
  buttons.forEach((btn) => btn.addEventListener("click", () => {
    const filter = btn.dataset.pfilter;
    buttons.forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-pressed", String(b === btn)); });
    movePill(btn);
    const state = Flip.getState(cards);
    cards.forEach((c) => c.toggleAttribute("hidden", filter !== "all" && c.dataset.type !== filter));
    if (reduced) return;
    Flip.from(state, {
      duration: 0.7, ease: "power3.inOut", scale: true, nested: true,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, clearProps: "opacity,scale" }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.9, duration: 0.3 }),
    });
  }));
}

export function initAnimations(options: { skipIntro?: boolean } = {}) {
  cleanupAnimations();
  const controller = new AbortController();
  activeCleanups.push(() => controller.abort());

  projectFilters(controller.signal);
  if (reduced) { counters(true); return; }
  if (!options.skipIntro) heroIntro();
  parallax();
  scrollProgress();
  counters(Boolean(options.skipIntro));
  timeline();
  sectionHeadings();
  tilt();
  magnetic();
  cursorGlow(controller.signal);
  stars(controller.signal);
  ScrollTrigger.refresh();
}
