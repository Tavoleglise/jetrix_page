const generateFooter = (element, isMicro) => {
  const mainFooter = `
    <div class="grid3Columns paddT50">
        <div class="centerItem grid">
            <span>Términos y condiciones</span>
        </div>
        <div class="centerItem footerCenter">
            <img src="${
              isMicro ? "../img/logo.png" : "img/logo.png"
            }" class="logo" />
        </div>
        <div class="centerItem grid">
            <span>Aviso de privacidad</span>
        </div>
        <div class="rights grid textCenter">
            <span>© 2023 Jetrix. Todos los derechos reservados</span>
        </div>
    </div>
        `;
  if (element) {
    element.innerHTML = mainFooter;
    console.log(element);
  }
};

export default generateFooter;
