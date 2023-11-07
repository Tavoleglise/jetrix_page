const generateHead = (title, microCss) => {
  const headHtml = `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="indexJarv/index.css" />
    <link
      rel="icon"
      type="image/x-icon"
      href="./assets/img/icons/Favicon.png"
    />
    <title>Jetrix</title>`;
  const head = document.querySelector("head");
  head.innerHTML = headHtml;
};

export default generateHead;
