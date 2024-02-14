const button_to_contact = document.getElementById("button_to_contact");

button_to_contact.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: `#footer`,
  });
});
