export const px3000Aplications = [
  {
    type: "Etiquetas",
    id: 1,
    aplications: [
      {
        name: "Autoadherible",
        url_image: "../../assets/img/pages/px3000/Etiquetas-autoadherible.png",
      },
      {
        name: "IML",
        url_image: "../../assets/img/pages/px3000/Etiquetas-IML.png",
      },
      {
        name: "Heat transfer",
        url_image: "../../assets/img/pages/px3000/Etiquetas-heat_transfer.png",
      },
      {
        name: "Wrap around",
        url_image: "../../assets/img/pages/px3000/Etiquetas-wrap_arround.png",
      },
    ],
  },
];

export const dryTonerAplications = [
  {
    type: "Empaque flexible",
    id: 0,
    aplications: [
      {
        name: "Autoadherible",
        url_image: "../../assets/img/pages/dry-toner/Pouches.png",
      },
    ],
  },
  {
    type: "Especialidades",
    id: 1,
    aplications: [
      {
        name: "Banners",
        url_image: "../../assets/img/pages/dry-toner/Especialidades-banner.png",
      },
      {
        name: "Wallpapres",
        url_image: "../../assets/img/pages/dry-toner/Especialidades-wallpaper.png",
      },
      {
        name: "Security <br> printing",
        url_image:
          "../../assets/img/pages/dry-toner/Especialidades-security-printing.png",
      },
      {
        name: "heat transfer",
        url_image: "../../assets/img/pages/dry-toner/Etiquetas-heat-transfer.png",
      },
    ],
  },
  {
    type: "Etiquetas",
    id: 1,
    aplications: [
      {
        name: "Etiquetas IML",
        url_image: "../../assets/img/pages/dry-toner/Etiquetas-IML.png",
      },
    ],
  },
];

export const weiganseriesJZR = [
  {
    type: "Empaque flexible",
    id: 0,
    aplications: [
      {
        name: "Aluminio",
        url_image: "../../assets/img/pages/weigan/Empaque-flexible/Aluminio.jpg",
      },
      {
        name: "pbl",
        url_image: "../../assets/img/pages/weigan/Empaque-flexible/PBL.jpg",
      },
      {
        name: "Pouches",
        url_image: "../../assets/img/pages/weigan/Empaque-flexible/Pouches.png",
      },
    ],
  },
  {
    type: "Etiquetas",
    id: 1,
    aplications: [
      {
        name: "Etiquetas IML",
        url_image: "../../assets/img/pages/weigan/Etiquetas/Etiquetas-IML.png",
      },
      {
        name: "Etiquetas Termoencogibles",
        url_image:
          "../../assets/img/pages/weigan/Etiquetas/Etiquetas-termoencogibles.png",
      },
      {
        name: "Etiquetas Wrap Arround",
        url_image:
          "../../assets/img/pages/weigan/Etiquetas/Etiquetas-wrap-arround.png",
      },
    ],
  },
];
export const rebornApplications = [
  {
    type: "Acabados especiales",
    id: 0,
    aplications: [
      {
        name: "embozado",
        url_image: "../../assets/img/pages/reborn/embozado.jpg",
      },
      {
        name: "hot stamping",
        url_image: "../../assets/img/pages/reborn/hot-stamping.jpg",
      },
      {
        name: "serigrafia",
        url_image: "../../assets/img/pages/reborn/serigrafia.jpg",
      },
    ],
  },
];

export const addPdfEvent = (button, pdf) => {
  button.addEventListener("click", () => {
    window.open(pdf, "_blank");
  });
};
