const express = require('express');

const nodemailer = require("nodemailer");

const app = express();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aprilshower19@gmail.com', // generated ethereal user
    pass: 'nnn111529413', // generated ethereal password
  },
});

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/sendMessage', function (req, res) {
// send mail with defined transport object
  let info = transporter.sendMail({
    from: 'aprilshower19@gmail.com', // sender address
    to: "mikita.grudkowski@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    //text: "Hello world?", // plain text body
    html: "<b>Test gmail service</b>", // html body
  });

  res.send('Hello ');

});

app.listen(3010, function () {
  console.log('Example app listening on port 3000!')
})