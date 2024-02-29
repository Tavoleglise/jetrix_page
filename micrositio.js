const tags_group = document.querySelector(".tags-group");
const filtered_aplications = document.querySelector(".apliactions-filtered");
const aplications_container = document.querySelector(".cards-container");
const SLIDER_ANIMATION_TIME = 10000;
const buttonPrevMobile = document.querySelector("#prev-button-mobile");
const buttonNextMobile = document.querySelector("#next-button-mobile");
import { dryTonerAplications } from "./utils/utils.js";

let aplication_html = "";
let tags_html = "";

const getTypesTags = async (machineObj) => {
  const types = machineObj;
  types.forEach((type, index) => {
    tags_html += `<div class="tag tag-desktop ${
      index === 0 ? "selected" : ""
    }">${type.type.toUpperCase()}</div>`;
  });
  tags_group.innerHTML = tags_html;

  const tags_arr = Array.from(document.querySelectorAll(".tag-desktop"));
  getAplications(0, types);

  tags_arr.forEach((tag, index) => {
    tag.addEventListener("click", function classClicked(event) {
      getAplications(index, types);
      tags_arr.forEach((tag) => {
        tag.classList.remove("selected");
      });
      tag.classList.add("selected");
    });
  });
};

const getAplications = async (id = 0, machineObj) => {
  let aplication_html = "";
  const aplicationsSpecificType = machineObj[id];

  aplicationsSpecificType.aplications?.forEach((aplication) => {
    aplication_html += `<div class="aplication-card"><img src="${
      aplication.url_image
    }" alt="" />${aplication.name.toUpperCase()}</div>`;
  });

  filtered_aplications.innerHTML = aplication_html;

  const aplication_cards = gsap.utils.toArray(".aplication-card");

  aplication_cards.forEach((card) => {
    card.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#contacto",
      });
    });
  });
};

const getMobileAplicationCards = async (machineObj) => {
  let mobileAplicationCard_html = "";
  const typesArr = machineObj;

  const container = document.querySelector(".cards-container");
  container.style.width = `${100 * typesArr.length}%`;

  typesArr.forEach((type) => {
    console.log(type.aplications);
    let mobileAplicationCardImages_html = "";
    mobileAplicationCard_html += `
    <div class="card">
      <div class="tag">${type.type}
      </div>
      <div class="apliactions-filtered"> 
      ${type.aplications
        .map((aplicationImage) => {
          return `<div class="aplication-card"><img src=${
            aplicationImage.url_image
          } alt="" />${aplicationImage.name.toUpperCase()}</div>`;
        })
        .join("")}</div>
    </div>`;
  });
  aplications_container.innerHTML = mobileAplicationCard_html;
  const aplication_sections = gsap.utils.toArray(
    ".aplications-container-mobile .cards-container .card"
  );

  let aplicationsActiveSection = 1;
  const animateAplications = (slideNumber) => {
    let scrollTween = gsap.to(aplication_sections, {
      xPercent: -100 * (slideNumber - 1),
    });
  };

  setInterval(() => {
    aplicationsActiveSection =
      aplicationsActiveSection < aplication_sections.length
        ? aplicationsActiveSection + 1
        : 1;
    animateAplications(aplicationsActiveSection);
  }, SLIDER_ANIMATION_TIME);

  buttonPrevMobile.addEventListener("click", (event) => {
    event.preventDefault();
    aplicationsActiveSection =
      aplicationsActiveSection <= 1
        ? aplication_sections.length
        : aplicationsActiveSection - 1;
    animateAplications(aplicationsActiveSection);
  });

  buttonNextMobile.addEventListener("click", (event) => {
    event.preventDefault();
    aplicationsActiveSection =
      aplicationsActiveSection >= aplication_sections.length
        ? 1
        : aplicationsActiveSection + 1;
    animateAplications(aplicationsActiveSection);
  });

  const aplication_cards = gsap.utils.toArray(".aplication-card");

  aplication_cards.forEach((card) => {
    card.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#contacto",
      });
    });
  });
};

export const generateAplications = (machineObj) => {
  getTypesTags(machineObj);
  getMobileAplicationCards(machineObj);
};

/* --------------------- */

const button_to_contact = document.getElementById("button_to_contact");
button_to_contact.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: `#contacto`,
  });
});
