import facebookicon from "../assets/svg/facebookicon.js";
import instagramicon from "../assets/svg/instagramIcon.js";
import linkedinicon from "../assets/svg/linkedInIcon.js";
import rrssButton from "../assets/svg/socialMediaButton.js";

const generateSocialNetworks = (isMicro = false) => {
    const socialNetworksHtml = `
        <div class="rrssContainer rrss">
            <a href="https://www.facebook.com/jetrixsoluciones" target="_blank" class="social-network">${facebookicon}</a>
            <a href="https://www.instagram.com/jetrix_soluciones_graficas/" target="_blank" class="social-network">${instagramicon}</a>
            <a href="https://mx.linkedin.com/company/jetrix-soluciones-graficas" target="_blank" class="social-network">${linkedinicon}</a>
        </div>
        <div class="rrssContainer closeButton">
        ${rrssButton}
        </div>
    `;
    const socialNetworkElement = document.createElement("div");
    socialNetworkElement.innerHTML = socialNetworksHtml;
    document.body.appendChild(socialNetworkElement);

    window.addEventListener('load', () => {
        const rrssContainer = document.querySelector('.rrss');
        const closeButton = document.querySelector('.closeButton');
    
        // Oculta inicialmente el contenedor rrss
        gsap.set(rrssContainer, { autoAlpha: 0 });
    
        // Al hacer hover sobre closeButton, muestra rrss y oculta closeButton
        closeButton.addEventListener('mouseenter', () => {
            gsap.to(rrssContainer, { autoAlpha: 1, duration: 0.5 });
            gsap.to(closeButton, { autoAlpha: 0, duration: 0.5 });
        });
    
        // Al alejar el mouse de rrss, oculta rrss y muestra closeButton
        rrssContainer.addEventListener('mouseleave', () => {
            gsap.to(rrssContainer, { autoAlpha: 0, duration: 0.5 });
            gsap.to(closeButton, { autoAlpha: 1, duration: 0.5 });
        });
    });
};

export default generateSocialNetworks;

