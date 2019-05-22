import "../scss/main.scss";
import photo1 from "../public/img/foto1.jpg";
import photo2 from "../public/img/foto2.jpg";
import photo3 from "../public/img/foto3.jpg";
import photo4 from "../public/img/foto4.jpg";
import photoAbout from "../public/img/foto-about.jpg";
import contactBackground from "../public/img/contact-background.jpg";
import lublinMap from "../public/img/lublin-map.jpg";
import "./slider";
import "./mobileMenu";
// import { lightbox } from "./lightbox";

const slider = document.querySelector(".header__slider");

slider.children[0].style.backgroundImage = `url(dist/${photo1})`;
slider.children[1].style.backgroundImage = `url(dist/${photo2})`;
slider.children[2].style.backgroundImage = `url(dist/${photo3})`;
slider.children[3].style.backgroundImage = `url(dist/${photo4})`;

const aboutImage = document.querySelector(".about__imageContainter-image");

aboutImage.style.backgroundImage = `url(dist/${photoAbout})`;

const contactHeader = document.querySelector(".contact__header");
contactHeader.style.backgroundImage = `url(dist/${contactBackground})`;

const contactMap = document.querySelector(".contact-map");
contactMap.style.backgroundImage = `url(dist/${lublinMap})`;

const mainContainer = document.querySelector(".mainContainer");
mainContainer.style.display = "none";

const showPage = () => {
  mainContainer.style.display = "block";
};

setTimeout(showPage, 4200);
