export class Herramientales {
  constructor() {
    this.htmlToInject = "";
  }

  execute(sectionsInfo) {
    this.htmlToInject = this._generateHtml(sectionsInfo);
    this._injectHtml();
    this._scrollToSection();
  }

  _generateHtml(herramentalesSections) {
    let tempHtml = "";
    herramentalesSections.forEach((section) => {
      tempHtml += `
                  <section id="${section.id}" class="herramentales-section">
                      ${
                        section.infoSide === "rigth"
                          ? `<div class="img-container">
                      <img
                        src="../../assets/img/pages/herramentales/CTS_Circulo.png"
                        alt=""
                      />
                    </div>`
                          : ""
                      }
                    <div class="info-container">
                      <div class="brand-label">${section.brandName}</div>
                      <div class="title">${section.title}</div>
                      ${section.bulletsGroups
                        .map(
                          (bulletGroup) => `<div class="bullet-container">
                        ${
                          bulletGroup.bulletsGroupTitle
                            ? `<div class="title-bullets">${bulletGroup.bulletsGroupTitle}</div>`
                            : ""
                        }
                        ${bulletGroup.bullets
                          .map(
                            (bullet) => `<div class="bullet">
                          <div class="bullet-circle"></div>
                          ${bullet}</div>`
                          )
                          .join("")}
                      </div>`
                        )
                        .join("")}
                    </div>
                    ${
                      section.infoSide === "left"
                        ? `<div class="img-container">
                    <img
                      src="../../assets/img/pages/herramentales/CTS_Circulo.png"
                      alt=""
                    />
                  </div>`
                        : ""
                    }
                  </section>
                  `;
    });
    return tempHtml;
  }

  _injectHtml() {
    const $sectionsContainer = document.querySelector(".sections-container");
    $sectionsContainer.innerHTML = this.htmlToInject;
  }

  _scrollToSection() {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = urlParams.get("sectionId");
    console.log("sectionId", sectionId);
    if (sectionId) {
      const $section = document.getElementById(sectionId);
      $section.scrollIntoView({ behavior: "smooth" });
    }
  }
}