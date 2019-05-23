import "../scss/main.scss";
import photo1 from "../public/img/foto1.jpg";
import photo2 from "../public/img/foto2.jpg";
import photo3 from "../public/img/foto3.jpg";
import photo4 from "../public/img/foto4.jpg";
import photoAbout from "../public/img/foto-about.jpg";
import projectsBackground from "../public/img/projects-background.jpg";
import contactBackground from "../public/img/contact-background.jpg";
import lublinMap from "../public/img/lublin-map.jpg";
import "./slider";
import "./mobileMenu";
import lightbox from "./lightbox";
import AOS from "aos";
import "aos/dist/aos.css";

// Add image to slider in header
const slider = document.querySelector(".header__slider");
slider.children[0].style.backgroundImage = `url(dist/${photo1})`;
slider.children[1].style.backgroundImage = `url(dist/${photo2})`;
slider.children[2].style.backgroundImage = `url(dist/${photo3})`;
slider.children[3].style.backgroundImage = `url(dist/${photo4})`;

// Add image in about section
const aboutImage = document.querySelector(".about__imageContainter-image");
aboutImage.style.backgroundImage = `url(dist/${photoAbout})`;

// Add backgroundImage in projects section
const projectsSection = document.querySelector(".projects");
projectsSection.style.backgroundImage = `url(dist/${projectsBackground})`;

// Add backgroundImage in contact section
const contactHeader = document.querySelector(".contact__header");
contactHeader.style.backgroundImage = `url(dist/${contactBackground})`;

// Add map in contact section
const contactMap = document.querySelector(".contact-map");
contactMap.style.backgroundImage = `url(dist/${lublinMap})`;

// In start page mainContainer is display:none, beacuse on the screen displays loader section.
// After that display check to block and show on the screen.
const mainContainer = document.querySelector(".mainContainer");
mainContainer.style.display = "none";

const showPage = () => {
  mainContainer.style.display = "block";
};
setTimeout(showPage, 1000);

//Plugin to animate show a section
AOS.init();

// Close mobile menu after come to section
const mobileElements = document.querySelectorAll(".mobileLink");
const mobileMenu = document.querySelector(".header__mobileContainer__menu");
const mobileIco = document.querySelector(".header__mobileMenuButtonContainer");

mobileElements.forEach(el => {
  el.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    mobileIco.classList.remove("active");
  });
});

// Scroll to chosen section
$('a[href^="#"]').on("click", function(e) {
  e.preventDefault();
  let target = $(this.hash);

  $("html, body").animate(
    {
      scrollTop: target.offset().top - $(".header__nav").outerHeight()
    },
    1000,
    "swing"
  );
});
