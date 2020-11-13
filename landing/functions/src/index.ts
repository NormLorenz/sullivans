// Start writing Firebase Functions

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';

const APP_BUCKET = 'sullivan-f9153.appspot.com';
const APP_NAME = 'Sullivan Excavating Inc';
const APP_EMAIL = 'sullivanexcavatinginc@gmail.com';
const SUBJECT_CUSTOMER = 'Thank You for Your Message';
const SUBJECT_BUSINESS = 'ATTN: Web Site Message Received';

export interface IEmailEnvelope {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

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

export const HealthStatus = functions.https.onRequest((request, response) => {
  response.send('The email function is alive and well!\n\n');
});

export const SendCustomerEmail = functions.https.onRequest((request, response) => {
  const emailEnvelope = createEmailEnvelope('Norm Lorenz', 'normlorenz@gmail.com', '5092301370', 'Hey', 'How much will it cost');
  response.send(sendEmail('emails/customer.html', SUBJECT_CUSTOMER, emailEnvelope));
});

export const SendBusinessEmail = functions.https.onRequest((request, response) => {
  const emailEnvelope = createEmailEnvelope('Norm Lorenz', 'normlorenz@gmail.com', '5092301370', 'Hey', 'How much will it cost');
  response.send(sendEmail('emails/business.html', SUBJECT_BUSINESS, emailEnvelope));
});

// export const SendWelcomeEmail = functions.auth.user().onCreate((user) => {
//   const emailEnvelope = createEmailEnvelope('Norm Lorenz', 'normlorenz@gmail.com', '5092301370', 'Hey', 'How much will it cost');
//   return sendEmail('emails/signup.html', `Welcome to ${APP_NAME}!`, emailEnvelope);
// });

async function sendEmail(templatePath: string, subject: string, emailEnvelope: IEmailEnvelope) {
  const bucket = admin.storage().bucket(APP_BUCKET);
  const template = await bucket.file(templatePath).download();

  const mailOptions = {
    from: `${APP_NAME} <${APP_EMAIL}>`,
    subject: subject,
    html: handlebars.compile(template.toString())(emailEnvelope),
    to: emailEnvelope.email,
  };

  console.log('sendEmail', mailOptions);
  await mailTransport.sendMail(mailOptions);
  console.log('sendEmail', subject, emailEnvelope);
  return 'true';
}

function createEmailEnvelope(name: string, email: string, phone: string, subject: string, message: string): IEmailEnvelope {
  const newEmail = { name: name, email: email, phone: phone, subject: subject, message: message };
  return newEmail;
}

// https://github.com/firebase/functions-samples/issues/499