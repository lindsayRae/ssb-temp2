require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const emailUser = process.env.nodemailer_user;
const emailPass = process.env.nodemailer_pass;

router.post('/', async (req, res) => {
  let fullName = req.body.fullName;
  let email = req.body.email;

  try {
    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    let mailOptions = {
      from: emailUser,
      to: 'lbarnett712@gmail.com',
      subject: `Subscribe Me!`,
      text: `From: ${fullName}, ${email}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send({ status: 200, message: 'Email was sent. Thank you!' });
      }
    });
  } catch (error) {
    console.log('error: ', error);
  }
});

module.exports = router;
