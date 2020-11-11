// Start writing Firebase Functions


// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// https://github.com/firebase/functions-samples/issues/454
// https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Handlebars from 'handlebars';
import * as nodemailer from 'nodemailer'; 

// import { admin } from 'firebase-admin/lib/auth';
// https://nodemailer.com/about/

const APP_BUCKET = 'project-id.appspot.com';
const APP_EMAIL = 'noreply@firebase.com';
const APP_NAME = 'Sullivan Excavating Inc';

const mailTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  }
});

export const SendWelcomeEmail = functions.auth.user().onCreate((user) => {
  return sendEmail('emails/signup.html', `Welcome to ${APP_NAME}!`, user);
});

export const SendSullivanEmail = functions.auth.user().onDelete((user) => {
  return sendEmail('emails/signout.html', `Email Query from ${APP_NAME}!`, user);
});

async function sendEmail(path: string, subject: string, user: admin.auth.UserRecord) {
  const bucket = admin.storage().bucket(APP_BUCKET);
  const template = await bucket.file(path).download();
  const mailOptions = {
    from: `${APP_NAME} <${APP_EMAIL}>`,
    subject: subject,
    html: Handlebars.compile(template.toString())(user),
    to: user.email,
  };
  
  await mailTransport.sendMail(mailOptions);
  console.log('sendEmail', subject, user.email);

  return true;
}