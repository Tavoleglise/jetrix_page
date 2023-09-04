function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "josue_rojas1213@hotmail.com",
    Password: "Enter your password",
    To: 'josue_rojas1213@hotmail.com',
    From: "josue_rojas1213@hotmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
      alert("mail sent successfully")
    });
}