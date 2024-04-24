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
        url_image:
          "../../assets/img/pages/dry-toner/Especialidades-wallpaper.png",
      },
      {
        name: "Security <br> printing",
        url_image:
          "../../assets/img/pages/dry-toner/Especialidades-security-printing.png",
      },
      {
        name: "heat transfer",
        url_image:
          "../../assets/img/pages/dry-toner/Etiquetas-heat-transfer.png",
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
        url_image:
          "../../assets/img/pages/weigan/Empaque-flexible/Aluminio.jpg",
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

export const herramentalesSections = [
  {
    id: 0,
    infoSide: "left",
    brandName: "Anilox - CTS",
    title: "Calidad Premium",
    bulletsGroups: [
      {
        bulletsGroupTitle: null,
        bullets: [
          "Únicos en el mercado con 2 años de garantía",
          "Mejor tecnología de engraving en el mundo",
          "Soluciones a la medida para las aplicaciones más difíciles",
        ],
      },
    ],
    img: "../../assets/img/pages/herramentales/CTS_Circulo.png",
    pdf: "../../assets/pdf/px3000/Spec-sheet-Panther-series_metric.pdf",
  },
  {
    id: 1,
    infoSide: "rigth",
    brandName: "Cilindros Impresores - Rotometal",
    title: "Cilindros de gama alta",
    bulletsGroups: [
      {
        bulletsGroupTitle: "Cilindros de impresión",
        bullets: [
          "Resistencia a la corrosión",
          "Aumenta la resistencia al daño mecánico",
          "Mayor dureza y alta resistencia",
        ],
      },
      {
        bulletsGroupTitle: "Cilindros magnéticos",
        bullets: [
          "Resistencia a la abrasión",
          "Posibilidad de endurecimiento",
          "Mayor dureza",
        ],
      },
    ],
    img: "../../assets/img/pages/herramentales/Rotometal_Circulo.png",
    pdf: "../../assets/pdf/px3000/Spec-sheet-Panther-series_metric.pdf",
  },
  {
    id: 2,
    infoSide: "left",
    brandName: "Lavadora de Anilox - Sonic Solutions",
    title: "Mayor resultado a menor tiempo",
    bulletsGroups: [
      {
        bulletsGroupTitle: null,
        bullets: [
          "Método de limpieza ecológico con Eco Clean",
          "Sencillez de uso",
          "Soluciones desde 7” hasta 30”",
        ],
      },
    ],
    img: "../../assets/img/pages/herramentales/SonicSolutions_Circulo.png",
    pdf: "../../assets/pdf/px3000/Spec-sheet-Panther-series_metric.pdf",
  },
  {
    id: 3,
    infoSide: "rigth",
    brandName: "CSL 4000-D - Swiftcolor",
    title: "Impresora Inkjet para etiquetas",
    bulletsGroups: [
      {
        bulletsGroupTitle: null,
        bullets: [
          "Hasta 10cm de ancho",
          "Velocidad de 220mm x segundo",
          "1200x1200 dpi de resolución",
          "Imprime: Etiquetas de envíos, tags de equipaje, etiquetas de vinos y más",
        ],
      },
    ],
    img: "../../assets/img/pages/herramentales/swift.png",
    pdf: "../../assets/pdf/px3000/Spec-sheet-Panther-series_metric.pdf",
  },
];

export const addPdfEvent = (button, pdf) => {
  button.addEventListener("click", () => {
    window.open(pdf, "_blank");
  });
};
