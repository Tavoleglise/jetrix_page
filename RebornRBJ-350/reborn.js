import generateHeader from "../components/header.js";
import generateFooter from "../components/footer.js";
import { generateAplications } from "../micrositio.js";
import { rebornApplications } from "../utils/utils.js";

const buttonOpenPdf = document.querySelector("#butonPDF");

const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, true);
generateFooter(footer, true);

//-------------------------------------------------------------------------------------
buttonOpenPdf.addEventListener("click", () => {
  window.open(
    "../assets/pdf/reborn/Reborn-ficha tecnica.pdf",
    "_blank"
  );
});

//-------------------------------------------------------------------------------------

generateAplications(rebornApplications);
