// Start writing Firebase Functions
// https://github.com/firebase/functions-samples/issues/499

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';

const APP_BUCKET = 'sullivan-f9153.appspot.com';
const APP_NAME = 'Sullivan Excavating Inc';
const APP_EMAIL = 'sullivanexcavatinginc@gmail.com';
const APP_CC = 'sulli99181@outlook.com';
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

export const Health = functions.https.onRequest((request, response) => {
  response.send('The email function is alive and well!\n\n');
});

export const SendCustomerTestEmail = functions.https.onRequest((request, response) => {
  const { name, email, phone, subject, message } = request.body;
  const emailEnvelope = createEmailEnvelope(name, email, phone, subject, message);
  response.send(sendEmail('emails/customer.html', SUBJECT_CUSTOMER, emailEnvelope, 'normlorenz@gmail.com'));
});

export const SendBusinessTestEmail = functions.https.onRequest((request, response) => {
  const { name, email, phone, subject, message } = request.body;
  const emailEnvelope = createEmailEnvelope(name, email, phone, subject, message);
  response.send(sendEmail('emails/business.html', SUBJECT_BUSINESS, emailEnvelope, 'normlorenz@gmail.com'));
});

export const SendCustomerEmail = functions.https.onRequest((request, response) => {
  const { name, email, phone, subject, message } = request.body;
  const emailEnvelope = createEmailEnvelope(name, email, phone, subject, message);
  response.send(sendEmail('emails/customer.html', SUBJECT_CUSTOMER, emailEnvelope, email));
});

export const SendBusinessEmail = functions.https.onRequest((request, response) => {
  const { name, email, phone, subject, message } = request.body;
  const emailEnvelope = createEmailEnvelope(name, email, phone, subject, message);
  response.send(sendEmail('emails/business.html', SUBJECT_BUSINESS, emailEnvelope, APP_EMAIL));
});

async function sendEmail(templatePath: string, subject: string, emailEnvelope: IEmailEnvelope, recipient: string) {
  const bucket = admin.storage().bucket(APP_BUCKET);
  const template = await bucket.file(templatePath).download();

  const mailOptions = {
    from: `${APP_EMAIL} <${APP_NAME}>`,
    cc: `${APP_CC}`,
    subject: subject,
    html: handlebars.compile(template.toString())(emailEnvelope),
    to: recipient,
  };

  console.log('sendEmail', templatePath, subject, emailEnvelope);

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error.toString();
    }
    return 'Email sent succesfully';
  });
}

function createEmailEnvelope(name: string, email: string, phone: string, subject: string, message: string): IEmailEnvelope {
  const newEmail = { name: name, email: email, phone: phone, subject: subject, message: message };
  return newEmail;
}