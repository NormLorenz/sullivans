## turn off touchpad
* Search for mouse
* Click on mouse and touchpad
* Click off/on button to the right of touchpad settings

## Free images [here](www.pixabay.com)

## publish to firebase
https://alligator.io/angulardeploying-angular-app-to-firebase/
https://medium.com/@longboardcreator/deploying-angular-6-applications-to-firebase-hosting-b5dacde9c772

```bash
git clone https://github.com/NormLorenz/sullivans-excavating.git
npm install
ng serve --open
ng build --prod
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

## tasks yet to be completed
* fix favicon.ico
* use single quotes instead of double quotes in home markup file
* use initials instead of pictures for testimonies
* review services page - linda
* review about us page - linda
* review contact us page - linda
* finish off testomonies page
  * replace pictures with letters
* clean up assets
* write documentation
* hook site into Google maps
* clean up source tree
* remove shared folder
* need photos for the projects page
* emails
  * NOTE: BUILD CLICKABLE LINKS FOR BOTH PHONE AND EMAIL IN EMAIL TEMPLATES
  * email notification when sent
  * get api login for sullivanexcavatinginc@gmail.com email address
  * plumb in emails
  * why are the emails returning this {"domain":{"domain":null,"_events":{},"_eventsCount":1,"members":[]}}
* set spaces to 2

```html
<a href="tel:5099362681">509 936 2681</a>
<a href="mailto:sulli99181@outlook.com">sulli99181@outlook.com</a>
```
* 
```bash
# functions
https://www.google.com/search?q=html+email+tempate&rlz=1C1CHBF_enUS872US872&oq=html+email+tempate&aqs=chrome..69i57j0i10i457j0i10l6.15417j0j7&sourceid=chrome&ie=UTF-8
https://firebase.google.com/docs/storage/admin/start
#####
## https://firebase.google.com/docs/functions/config-env

firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"
firebase functions:config:set gmail.user="normlorenz@gmail.com" gmail.pass=""
firebase deploy --only functions
firebase functions:config:get gmail
#####
```
## Functions
// https://firebase.google.com/docs/functions/typescript
// https://github.com/firebase/functions-samples/issues/454
// https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
// https://nodemailer.com/about/
// https://firebase.google.com/docs/functions/config-env


```javascript
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
  origin: true
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${phone || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
     var sesAccessKey = 'YOURGMAIL@gmail.com';
     var sesSecretKey = 'password';

     var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
          user: sesAccessKey,
          pass: sesSecretKey
      }
    }));
    const mailOptions = {
      to: "myemail@myemail.com",
      from: "no-reply@myemail.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
     if(error){
        console.log(error.message);
     }
     res.status(200).send({
       message: "success"
     })
    });
  }).catch(() => {
    res.status(500).send("error");
  });
});
```

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
 
//Initializing Firebase Admin SDK
admin.initializeApp();
 
//Creating Nodemailer transporter using your Mailtrap SMTP details
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
  port: 2525,  
  auth: {
    user: "71b312d8f1a983",
    pass: "e7a8f2287183dd"
  }
});
 
//Creating a Firebase Cloud Function
exports.emailSender = functions.https.onRequest((req, res) => {   
      
            //Defining mailOptions
            const mailOptions = {
            from: 'alfo.opidi85@gmail.com', //Adding sender's email
            to: req.query.dest, //Getting recipient's email by query string
            subject: 'Email Sent via Firebase', //Email subject
            html: '<b>Sending emails with Firebase is easy!</b>' //Email content in HTML
        };
  
        //Returning result
        return transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return res.send(err.toString());
            }
            return res.send('Email sent succesfully');
        });
       
});
```