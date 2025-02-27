const btn = document.getElementById('mensaje');
console.log("entree");
document.getElementById('form')
 .addEventListener('submit', function(event) {
  emailjs.init("dloXgIZB4HQ-Mh4it");
   event.preventDefault();

   const serviceID = 'service_3boqv39';
   const templateID = 'template_0coojaa';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Enviado!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
});