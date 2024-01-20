import generateHeader from "./components/header.js";
import generateFooter from "./components/footer.js";
import generateHead from "./components/head.js";

const container = document.querySelector(".slider-container");
const sections = gsap.utils.toArray(
  ".slider .slider-container .card-container"
);
const slider_buttons = gsap.utils.toArray(".slider .slider-container .button");
const buttonPrev = document.querySelector("#prev-button");
const buttonNext = document.querySelector("#next-button");

const buttonPrevMobile = document.querySelector("#prev-button-mobile");
const buttonNextMobile = document.querySelector("#next-button-mobile");

const tags_group = document.querySelector(".tags-group");
const filtered_aplications = document.querySelector(".apliactions-filtered");

const aplications_container = document.querySelector(".cards-container");

const SLIDER_ANIMATION_TIME = 10000

//generate components

const header = document.querySelector("header");
const footer = document.querySelector(".footer");
generateHeader(header, false);
generateFooter(footer, false);
// generateHead();
//-------------------------------------------------------------------------------------

let activeSection = 1;

const animateSlides = (slideNumber) => {
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (slideNumber - 1),
  });
};

setInterval(() => {
  activeSection = activeSection < sections.length ? activeSection + 1 : 1;
  animateSlides(activeSection);
}, SLIDER_ANIMATION_TIME);

buttonPrev.addEventListener("click", (event) => {
  event.preventDefault();
  activeSection = activeSection <= 1 ? sections.length : activeSection - 1;
  animateSlides(activeSection);
});

buttonNext.addEventListener("click", (event) => {
  event.preventDefault();
  activeSection = activeSection >= sections.length ? 1 : activeSection + 1;
  animateSlides(activeSection);
});

//-------------------------------------------------------------------------------------
let aplication_html = "";
let tags_html = "";

const fetchData = async () => {
  const response = await fetch("./json_folder/database.json");
  const aplications = await response.json();
  return aplications;
};

const getTypesTags = async () => {
  const types = await fetchData();
  types.aplications_type.forEach((type, index) => {
    tags_html += `<div class="tag ${
      index === 0 ? "selected" : ""
    }">${type.type.toUpperCase()}</div>`;
  });
  tags_group.innerHTML = tags_html;
  const tags_arr = document.querySelectorAll(".tag");

  tags_arr.forEach((tag, index) => {
    tag.addEventListener("click", function classClicked(event) {
      tags_arr.forEach((tag) => {
        getAplications(index);
        tag.classList.remove("selected");
      });
      tag.classList.add("selected");
    });
  });
};

const getAplications = async (id = 0) => {
  let aplication_html = "";
  const types = await fetchData();
  const aplicationsSpecificType = types.aplications_type[id];

  if (id === types.aplications_type.length - 1) {
    aplication_html =
      '<div class="button button-acabadosEspeciales">Contáctanos</div>';
  }

  aplicationsSpecificType.aplications.forEach((aplication) => {
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

  const button_acabados = document.querySelector(".button-acabadosEspeciales");
  button_acabados?.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#contacto",
    });
  });
};

const getMobileAplicationCards = async () => {
  let mobileAplicationCard_html = "";
  const types = await fetchData();
  const typesArr = types.aplications_type;

  typesArr.forEach((type) => {
    let mobileAplicationCardImages_html = "";
    mobileAplicationCard_html += `
    <div class="card">
      <div class="tag">${type.type}
      </div>
      <div class="apliactions-filtered"> 
      ${
        type.id === 4
          ? "<div class='mobile-aplication-button-container'><div class='button'>Contactános</div></div>"
          : type.aplications
              .map((aplicationImage) => {
                return `<div class="aplication-card"><img src=${
                  aplicationImage.url_image
                } alt="" />${aplicationImage.name.toUpperCase()}</div>`;
              })
              .join("")
      }</div>
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
  const button_acabados = document.querySelector(
    ".mobile-aplication-button-container .button"
  );
  button_acabados.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#contacto",
    });
  });
};

getTypesTags();
getAplications();
getMobileAplicationCards();

//-------------------------------------------------------------------------------------

const scrollButtons = slider_buttons.slice(1, slider_buttons.length);

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#contacto",
    });
  });
});
