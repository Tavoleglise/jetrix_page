import generateHeader from "../components/header.js";
import generateFooter from "../components/footer.js";

const navbuttons_group = document.querySelectorAll(".menu-container ul li");
const button_to_contact = document.getElementById("button_to_contact");

const buttonOpenPdf = document.querySelector("#butonPDF");

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
buttonOpenPdf.addEventListener("click", () => {
  window.open(
    "../assets/pdf/dry-toner/Equipos digitales_Xeikon_FichaTecnica.pdf",
    "_blank"
  );
});
