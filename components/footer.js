const generateFooter = (element, isMicro) => {
  const mainFooter = `
    <div class="grid3Columns paddT50">
        <div class="centerItem grid">
            <span>Términos y condiciones</span>
        </div>
        <div class="centerItem footerCenter">
            <img src="${
              isMicro ? "../assets/img/logo.png" : "./assets/img/logo.png"
            }" class="logo" />
        </div>
        <div id="avisoDePrivacidadButton" class="centerItem grid">
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

  const buttonOpenPdf = document.querySelector("#avisoDePrivacidadButton");
  buttonOpenPdf.addEventListener("click", () => {
    window.open(
      `${
        isMicro ? ".." : "."
      }/assets/pdf/AvisodePrivacidadJetrix_230830_121653.pdf`,
      "_blank"
    );
  });
};

export default generateFooter;
