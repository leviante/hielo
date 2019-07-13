const revealNav = () => {
  const menu = document.querySelector("#navbar-menu");

  menu.classList.toggle("active");
  navIsOpen = !navIsOpen;
};

const stickyHeader = flag => {
  const showcase = document.querySelector("#showcase");
  const showcaseHeight = showcase.offsetHeight;

  const header = document.querySelector("#main-header");

  if (window.scrollY >= showcaseHeight && !flag) {
    header.classList.add("fixed");
    flag = !flag;
  } else {
    header.classList.remove("fixed");
    flag = !flag;
  }
};

const changeToggler = event => {
  const oldShowcaseToggler = document.querySelector(
    ".showcase-toggler .current"
  );
  oldShowcaseToggler.classList.remove("current");

  event.target.classList.add("current");
};

const changeShowcase = index => {
  const oldShowcase = document.querySelector(".showcase-item.current");
  oldShowcase.classList.remove("current");

  const targetShowcase = document.querySelector(
    `.showcase-item:nth-child(${index + 1})`
  );
  targetShowcase.classList.add("current");
};

const nextShowcase = () => {
  const oldShowcase = document.querySelector(".showcase-item.current");
  oldShowcase.classList.remove("current");

  const oldShowcaseToggler = document.querySelector(
    ".showcase-toggler .current"
  );
  oldShowcaseToggler.classList.remove("current");

  //check for next slide, if it's the end, add current to first
  if (oldShowcase.nextElementSibling.classList.contains("showcase-toggler")) {
    // Add current to first showcase and first toggler
    const firstShowcase = document.querySelector(".showcase-item");
    firstShowcase.classList.add("current");

    const firstToggler = document.querySelector(".showcase-toggler .fas");
    firstToggler.classList.add("current");
  } else {
    //Add current to next sibling
    oldShowcase.nextElementSibling.classList.add("current");
    oldShowcaseToggler.nextElementSibling.classList.add("current");
  }
};
