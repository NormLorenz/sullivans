// Start writing Firebase Functions

// https://firebase.google.com/docs/functions/typescript
// https://github.com/firebase/functions-samples/issues/454
// https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
// https://nodemailer.com/about/
// https://firebase.google.com/docs/functions/config-env

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';

const APP_BUCKET = 'sullivan-f9153.appspot.com';
const APP_NAME = 'Sullivan Excavating Inc';
const APP_EMAIL = 'lindaoaksford@gmail.com';
const SUBJECT_CUSTOMER = 'Thank You for Your Query';
const SUBJECT_BUSINESS = 'ATTN: Web Site Query Received';

export interface IEmailEnvelope {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

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
  let emailEnvelope = createEmailEnvelope('Norm Lorenz', 'normlorenz@gmail.com', '5092301370', 'Hey', 'How much will it cost');
  sendEmail('emails/customer.html', SUBJECT_CUSTOMER, emailEnvelope);
  response.send('<p>some html</p>');
});

export const SendBusinessEmail = functions.https.onRequest((request, response) => {
  let emailEnvelope = createEmailEnvelope('Norm Lorenz', 'normlorenz@gmail.com', '5092301370', 'Hey', 'How much will it cost');
  sendEmail('emails/business.html', SUBJECT_BUSINESS, emailEnvelope);
  response.send('<p>some html</p>');
});

// export const SendSullivanEmail = functions.auth.user().onDelete((user) => {
//   return sendEmail('emails/signout.html', `Email Query from ${APP_NAME}!`, user);
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

  await mailTransport.sendMail(mailOptions);
  console.log('sendEmail', subject, emailEnvelope);

  return true;
}

function createEmailEnvelope(name: string, email: string, phone: string, subject: string, message: string): IEmailEnvelope {
  let newEmail = { name: name, email: email, phone: phone, subject: subject, message: message };
  return newEmail;
}