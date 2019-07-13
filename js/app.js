// Grab hamburger, when user clicks, the menu expands from right (adding active class)
const hamburger = document.querySelector(".navbar-toggler");

hamburger.addEventListener("click", revealNav);

//Grab exit button, when user clicks hide nav menu again
const exitBtn = document.querySelector(".navbar-item:nth-child(1)");

exitBtn.addEventListener("click", revealNav);

//Listen window click, when nav is open, close it
let navIsOpen = false;
window.addEventListener("click", e => {
  //if clicked target is hamburger menu (or the icon), do nothing / else, toggle navbar
  if (e.target === hamburger || e.target.classList.contains("fas")) {
  } else if (navIsOpen) {
    revealNav();
  }
});

//Grab showcase togglers, when clicked any of them, grab associated showcase item and reveal it
const showcaseTogglers = document.querySelectorAll(".showcase-toggler i");

showcaseTogglers.forEach((toggler, index) =>
  toggler.addEventListener("click", e => {
    changeToggler(e);
    changeShowcase(index);
    if (!auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextShowcase, intervalTime);
    }
  })
);

let isHeaderOpen = false;
//When window is scrolled past 90% of showcase height, change navbar position to sticky (apply class)
window.addEventListener("scroll", () => {
  if (!isHeaderOpen) {
    stickyHeader(isHeaderOpen);
  } else {
    stickyHeader(isHeaderOpen);
  }
});

//Variables for auto slide showcase
const auto = false;
const intervalTime = 5000;
let slideInterval;

if (!auto) {
  //run next slide at interval time
  slideInterval = setInterval(nextShowcase, intervalTime);
}
