import generateHeader from "../components/header.js";
import generateFooter from "../components/footer.js";

const navbuttons_group = document.querySelectorAll(".menu-container ul li");
const button_to_contact = document.getElementById("button_to_contact");

const navbar_icon = document.querySelector(".burguermenu-icon");
const burguermenu = document.querySelector(".burguermenu");

const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, true);
generateFooter(footer, true);

button_to_contact.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: `#contacto`,
  });
});

navbuttons_group.forEach((button, index) => {
  if (index === 0) {
    return;
  }
  button.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `${button.getAttribute("href")}`,
    });
  });
});

//-------------------------------------------------------------------------------------
let isMenuHidden = false;

const menuDisplay = (flag) => {
  gsap.to(burguermenu, {
    display: `${flag ? "none" : "block"}`,
  });
  gsap.to(burguermenu, {
    opacity: `${flag ? 0 : 1}`,
  });
};
navbar_icon.addEventListener("click", () => {
  menuDisplay(isMenuHidden);
  isMenuHidden = !isMenuHidden;
});
console.log(isMenuHidden);

//-------------------------------------------------------------------------------------
