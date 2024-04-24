import generateHeader from "../../components/header.js";
import generateFooter from "../../components/footer.js";
import { generateAplications } from "../../micrositio.js";
import { px3000Aplications } from "../../utils/utils.js";

const buttonOpenPdf = document.querySelector("#butonPDF");

const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, true);
generateFooter(footer, true);

//-------------------------------------------------------------------------------------
buttonOpenPdf.addEventListener("click", () => {
  window.open(
    "../../assets/pdf/dry-toner/Equipos digitales_Xeikon_FichaTecnica.pdf",
    "_blank"
  );
});

//-------------------------------------------------------------------------------------

generateAplications(px3000Aplications);
