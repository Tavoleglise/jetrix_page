import { addPdfEvent } from "../utils/utils.js";

const PDF_URL = "/assets/pdf/AvisodePrivacidadJetrix_230830_121653.pdf";

const generateFooter = (element, isMicro) => {
  const mainFooter = `${isMicro ? '<div class="writeUs" id="contacto"><div class="wrtiteTitle color1e paddingB"><span class="px45 bold">Escríbenos</span><div class="color1e px24"><span>Nos pondremos en contacto contigo lo antes posible</span></div></div><form id="form" class="gridForm" action="https://formsubmit.co/marketing@jetrix.com.mx" method="POST"><div class="formItem"><input class="marB25 width50 formItem height50" type="text" id="campo1" name="Nombre" placeholder="Nombre*"/></div><div class="marB25 formItem grid2columns height50" id="telMen"><input class="width" type="text" id="campo2" name="Telefono" maxlength="10" placeholder="Telefono*"/><input type="email" id="campo3" name="Mail" placeholder="Mail*"/></div><div class="marB25 paddT10 height100 message"><input class="width100 formItem" type="text" id="campo4" name="Mensaje" placeholder="Mensaje*"/></div><div class="sendBtn"><button class="btnCss" type="submit">Enviar</button></div>' : ""}
    <div class="grid3Columns paddT50">
        <div id="terminosYCondicionesButton" class="centerItem grid footerButton">
            <span>Términos y condiciones</span>
        </div>
        <div class="centerItem footerCenter">
            <img src="${
              isMicro ? "../../assets/img/logo.png" : "./assets/img/logo.png"
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

  addPdfEvent(buttonPrivacyNoticePdf, `${isMicro ? "../.." : "."}${PDF_URL}`);
  addPdfEvent(buttonTermsAndConditions, `${isMicro ? "../.." : "."}${PDF_URL}`);
};

export default generateFooter;
