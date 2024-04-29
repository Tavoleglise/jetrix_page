export class Herramientales {
  constructor() {
    this.htmlToInject = "";
  }

  execute(sectionsInfo) {
    this.htmlToInject = this._generateHtml(sectionsInfo);
    this._injectHtml();
    this._scrollToSection();
    this._scrollToContact();
  }

  _generateHtml(herramentalesSections) {
    let tempHtml = "";
    herramentalesSections.forEach((section) => {
      tempHtml += `<div class="section-wrapper ${section.infoSide === "rigth" ? "grey-background" : ""}">
                    <section id="${section.id}" class="herramentales-section ${section.infoSide === "left" ? "reverse-column" : ""}">
                      ${
                        section.infoSide === "rigth"
                          ? `<div class="img-container  ${
                              section.infoSide === "rigth"
                                ? "img-left"
                                : "img-rigth"
                            }">
                      <img
                        src="${section.img}"
                        alt=""
                      />
                    </div>`
                          : ""
                      }
                    <div class="info-container ${
                      section.infoSide === "rigth" ? "info-rigth" : "info-left"
                    }">
                      <div class="info-box">
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
                    </div>
                    ${
                      section.infoSide === "left"
                        ? `<div class="img-container ${
                            section.infoSide === "rigth"
                              ? "img-left"
                              : "img-rigth"
                          }">
                    <img
                      src="${section.img}"
                      alt=""
                    />
                  </div>`
                        : ""
                    }
                  </section>
                  <div class="bContainer">
                    <button class="button1 bold button_to_contact" id="button_to_contact">
                      Contacta a un asesor
                    </button>
                    <button id="butonPDF" class="button2 bold">
                      <a href="${section.pdf}">Ficha Técnica</a>
                    </button>
                  </div>
                </div>
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
  _scrollToContact() {
    const $buttonsToContact = document.querySelectorAll(".button_to_contact");
    $buttonsToContact.forEach(($button) => {
      $button.addEventListener("click", () => {
        const $contactSection = document.getElementById("contacto");
        $contactSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}
