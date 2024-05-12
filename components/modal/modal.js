export default function insertModal(title, content) {
  // Crea el elemento del modal
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Agrega el contenido del modal
  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-box">
        <div class="modal-header">
          ${title ? `<h2>${title}</h2>` : ""}
          <div class="close-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
              </svg>
          </div>
        </div>
        <div class="modal-content">
            ${content}
        </div>
      </div>
    </div>
    `;

  // Agrega el modal al cuerpo del documento
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}
