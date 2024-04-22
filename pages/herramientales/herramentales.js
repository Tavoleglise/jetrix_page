import generateHeader from "../../components/header.js";
import generateFooter from "../../components/footer.js";
import { herramentalesSections } from "../../utils/utils.js";
import { Herramientales } from "./herramentalesActions.js";

const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, true);
generateFooter(footer, true);

//-------------------------------------------------------------------------------------
const herramientalesActions = new Herramientales();
herramientalesActions.execute(herramentalesSections);
