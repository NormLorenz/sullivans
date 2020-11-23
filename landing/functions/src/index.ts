// Start writing Firebase Functions
// https://github.com/firebase/functions-samples/issues/499
// https://haha.world/firebase-cors/

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';

const cors = require("cors")({
  origin: true
});

const APP_BUCKET = 'sullivan-f9153.appspot.com';
const APP_EMAIL = 'Sullivan Excavating Inc <sullivanexcavatinginc@gmail.com>';
const APP_CC = 'Sullivan Excavating Inc <sulli99181@outlook.com>';
const TEST_EMAIL = 'Linda Oaksford <linda_oaksford@hotmail.com>';
const TEST_CC = 'Linda Oaksford <lindaoaksford@gmail.com>';
const SUBJECT_CUSTOMER = 'Thank You for Your Message';
const SUBJECT_BUSINESS = 'ATTN: Web Site Message Received';

export interface IEmailEnvelope {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// this line is required
admin.initializeApp();

const mailTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass
  }
});

export const Status = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    response.send({ available: true, status: 'The email function is alive and well!' });
  });
});

export const SendCustomerTestEmail = functions.https.onRequest((request, response) => {
  return cors(request, response, async () => {
    const bucket = admin.storage().bucket(APP_BUCKET);
    const template = await bucket.file('emails/customer.html').download();

    const mailOptions = {
      to: request.body.email,
      from: TEST_EMAIL,
      cc: '',
      subject: SUBJECT_CUSTOMER,
      html: handlebars.compile(template.toString())(request.body)
    };

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) { return response.send({ error: err.toString() }); }
      return response.send({ success: true });
    });
  });
});

export const SendBusinessTestEmail = functions.https.onRequest((request, response) => {
  return cors(request, response, async () => {
    const bucket = admin.storage().bucket(APP_BUCKET);
    const template = await bucket.file('emails/business.html').download();

    const mailOptions = {
      to: TEST_EMAIL,
      from: TEST_EMAIL,
      cc: TEST_CC,
      subject: SUBJECT_BUSINESS,
      html: handlebars.compile(template.toString())(request.body)
    };

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) { return response.send({ error: err.toString() }); }
      return response.send({ success: true });
    });
  });
});

export const SendCustomerEmail = functions.https.onRequest((request, response) => {
  return cors(request, response, async () => {
    const bucket = admin.storage().bucket(APP_BUCKET);
    const template = await bucket.file('emails/customer.html').download();

    const mailOptions = {
      to: request.body.email,
      from: APP_EMAIL,
      cc: '',
      subject: SUBJECT_CUSTOMER,
      html: handlebars.compile(template.toString())(request.body)
    };

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) { return response.send({ error: err.toString() }); }
      return response.send({ success: true });
    });
  });
});

export const SendBusinessEmail = functions.https.onRequest((request, response) => {
  return cors(request, response, async () => {
    const bucket = admin.storage().bucket(APP_BUCKET);
    const template = await bucket.file('emails/business.html').download();

    const mailOptions = {
      to: APP_EMAIL,
      from: APP_EMAIL,
      cc: APP_CC,
      subject: SUBJECT_BUSINESS,
      html: handlebars.compile(template.toString())(request.body)
    };

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) { return response.send({ error: err.toString() }); }
      return response.send({ success: true });
    });
  });
});