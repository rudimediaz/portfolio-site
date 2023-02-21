document.querySelectorAll("[data-hero-intersect]").forEach((el) => {
  el.classList.remove("hero");
});

const nav = document.querySelector("nav");
const toggleMenu = document.getElementById("menu-toggle");

const largeScreen = matchMedia("(min-width : 640px)");

largeScreen.addEventListener("change", handleDrawerOnMedia);

document.body.addEventListener("nav:toggle", (event) => {
  if (event.detail.navigationState === "expanded") {
    document.body.style.setProperty("overflow-y", "hidden");
  } else if (event.detail.navigationState === "collapsed") {
    document.body.style.setProperty("overflow-y", "auto");
  }
});

nav.addEventListener("nav:toggle", (event) => {
  nav.querySelectorAll("[data-nav-agent]").forEach((el) => {
    if (event.detail.navigationState === "expanded") {
      el.classList.add("drawer");
    } else if (event.detail.navigationState === "collapsed") {
      el.classList.remove("drawer");
    }
  });
});

toggleMenu.addEventListener("change", (event) => {
  setAriaExpanded.call(toggleMenu, event.target.checked);
});

/**
 * @this HTMLElement
 */
function getAriaExpanded() {
  return this.getAttribute("aria-expanded");
}

/**
 * @this HTMLElement
 * @param {boolean} value
 */
function setAriaExpanded(value) {
  this.setAttribute("aria-expanded", value);

  queueMicrotask(() => {
    const current = getAriaExpanded.call(this);

    this.dispatchEvent(
      new CustomEvent("nav:toggle", {
        detail: {
          navigationState: current === "true" ? "expanded" : "collapsed",
        },
        bubbles: true,
      })
    );
  });
}

function handleDrawerOnMedia(event) {
  if (event.matches) {
    toggleMenu.checked = false;
    toggleMenu.dispatchEvent(new Event("change"));
  }
}
