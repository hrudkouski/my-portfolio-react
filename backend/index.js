const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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

app.post('/sendMessage', async function (req, res) {
  const {name, email, message} = req.body;

// send mail with defined transport object
  await transporter.sendMail({
    from: 'My portfolio page', // sender address
    to: "mikita.grudkowski@gmail.com", // list of receivers
    subject: "✔ Hello, you have a new message", // Subject line
    html: `<b>Hi, Mikita. You have new message!</b>
    <div>name: ${name}</div>
    <div>email: ${email}</div>
    <div>message: ${message}</div>`, // html body
  });

  res.send('ok');
});

app.listen(3010, function () {
  console.log('Example app listening on port 3000!')
})