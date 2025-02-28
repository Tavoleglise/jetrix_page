const btn = document.getElementById('mensaje');
console.log("entree");
document.getElementById('form')
 .addEventListener('submit', function(event) {
  emailjs.init("ivzt_5SnDX4JuH7Jd");
   event.preventDefault();

   const serviceID = 'service_yyoexbc';
   const templateID = 'template_cvv49nb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Enviado!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
});