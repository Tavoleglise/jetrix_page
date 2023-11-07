const generateHeader = (element, isMicro) => {
  const mainHeader = `
    <nav>
    <div class="burguermenu-icon">
        <img src="${
          isMicro
            ? "../assets/img//icons/menu.png"
            : "./assets/img//icons/menu.png"
        }" alt="" />
    </div>
    <div class="logo-container">
        <a href="${isMicro ? "../" : "./"}">
            <img src="${
              isMicro
                ? '../assets/img/Jetrix_Logo.png" alt="logo"'
                : './assets/img/Jetrix_Logo.png" alt="logo"'
            }" />
        </a>
    </div>
    <div class="menu-container">
        <ul class="desktop-menu-list">
        <li>
          <a href="${isMicro ? "../" : "./"}">Home</a>
        </li>
        <li href="#aplications">Aplicaciones</li>
        <li href="#contacto">Contacto</li>
        <li>
            <a href="https://jetrix-team.exmoffice.com/cliente/">Soporte</a>
        </li>
        </ul>
        <div class="burguermenu">
        <ul>
            <li>
              <a href="${isMicro ? "../" : "./"}">Home</a>
            </li>
            <li href="#aplications">Aplicaciones</li>
            <li href="#contacto">Contacto</li>
            <li>
            <a href="https://jetrix-team.exmoffice.com/cliente/">Soporte</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    `;
  if (element) {
    element.innerHTML = mainHeader;
    let isMenuHidden = false;
    const navbuttons_group = document.querySelectorAll(".menu-container ul li");
    const navbar_icon = document.querySelector(".burguermenu-icon");
    const burguermenu = document.querySelector(".burguermenu");

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
  } else {
    return;
  }
};
export default generateHeader;
