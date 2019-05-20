import "../scss/main.scss";
import photo1 from "../public/img/foto1.jpg";
import photo2 from "../public/img/foto2.jpg";
import photo3 from "../public/img/foto3.jpg";
import photo4 from "../public/img/foto4.jpg";
import "./slider";
import "./mobileMenu";

console.log(photo1);

const slider = document.querySelector(".header__slider");

// slider.firstElementChild.style.backgroundImage = `url(dist/img/${photo1})`;

console.log(slider.children);
for (let i = 0; i < slider.children; i++) {
  slider.children[i].style.backgroundImage = `url(${photo[i]})`;
}
console.log(slider.children);
