import { animate as pmAnimate, easeOut } from "popmotion";
import { animate, stagger, inView } from "motion";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
const hero = document.querySelector(".hero");
const greet = document.querySelector(".greet");
const subgreet = document.querySelector(".sub-greet");

const greetText = greet.innerText;
const subGreetText = subgreet.innerText;

greet.addEventListener("hero:in", () => {
  greet.innerText = greetText;
  typeWrite(greet);
});

subgreet.addEventListener("hero:in", () => {
  subgreet.innerText = subGreetText;
  typeWrite(subgreet, { speed: 0.8 });
});

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    document.querySelectorAll("[data-hero-intersect]").forEach((el) => {
      if (isIntersecting) {
        el.dispatchEvent(new CustomEvent("hero:in"));
        el.classList.add("hero");
      } else {
        el.dispatchEvent(new CustomEvent("hero:out"));
        el.classList.remove("hero");
      }
    });
  },
  { threshold: 0.25 }
);

intersectionObserver.observe(hero);

inView("[data-motion-projects]", (info) => {
  const controls = animate(
    "[data-motion-project]",
    { opacity: [0, 1], x: [-100, 0] },
    {
      delay: stagger(0.1),
      duration: 1,
      easing: [0.22, 0.03, 0.26, 1],
    }
  );
});

/**
 *
 * @param {HTMLElement} el
 */
function typeWrite(el, { speed = 1, onComplete = () => {} } = {}) {
  const text = el.innerText;

  pmAnimate({
    from: 0,
    to: 1,
    ease: easeOut,
    duration: text.length / (speed * 0.01),
    onUpdate: (n) => {
      const i = ~~(text.length * n);
      el.innerText = text.slice(0, i);
    },
    onComplete,
  });
}
