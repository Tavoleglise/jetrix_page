import { addPdfEvent } from "../utils/utils.js";

const PDF_URL = "/assets/pdf/AvisodePrivacidadJetrix_230830_121653.pdf";

const generateFooter = (element, isMicro) => {
  const mainFooter = `
    <div class="grid3Columns paddT50">
        <div id="terminosYCondicionesButton" class="centerItem grid footerButton">
            <span>Términos y condiciones</span>
        </div>
        <div class="centerItem footerCenter">
            <img src="${
              isMicro ? "../assets/img/logo.png" : "./assets/img/logo.png"
            }" class="logo" />
        </div>
        <div id="avisoDePrivacidadButton" class="centerItem grid footerButton">
            <span>Aviso de privacidad</span>
        </div>
        <div class="rights grid textCenter">
            <span>© 2023 Jetrix. Todos los derechos reservados</span>
        </div>
    </div>
        `;
  if (element) {
    element.innerHTML = mainFooter;
  }

  const buttonPrivacyNoticePdf = document.querySelector(
    "#avisoDePrivacidadButton"
  );
  const buttonTermsAndConditions = document.querySelector(
    "#terminosYCondicionesButton"
  );

  addPdfEvent(buttonPrivacyNoticePdf, `${isMicro ? ".." : "."}${PDF_URL}`);
  addPdfEvent(buttonTermsAndConditions, `${isMicro ? ".." : "."}${PDF_URL}`);
};

export default generateFooter;
