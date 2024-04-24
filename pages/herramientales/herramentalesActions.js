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
                  <section id="${section.id}" class="herramentales-section ${
        section.infoSide === "left" ? "reverse-column" : "grey-background"
      }">
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
