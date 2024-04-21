import generateHeader from "../../components/header.js";
import generateFooter from "../../components/footer.js";
import { px3000Aplications } from "../../utils/utils.js";


const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, true);
generateFooter(footer, true);

//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
