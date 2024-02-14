function sendMsg(e){
  e.preventDefault();
  const form = document.querySelector('#form'),
  name = document.querySelector('#campo1'),
  email = document.querySelector('#campo3'),
  cell = document.querySelector('#campo2'),
  msg = document.querySelector('#campo4');
  Email.send({
    SecureToken : "32903293-a706-4f90-b68a-56bdddd2aa34",
    To : "josue_rojas1213@hotmail.com",
    From : email.value,
    Subject : "Contact form",
    Body : msg.value
  }).then(
  message => alert(message)
  );
}

form.addEventListener('submit', sendMsg)
