## turn off touchpad
* Search for mouse
* Click on mouse and touchpad
* Click off/on button to the right of touchpad settings

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
* tighted space between pages
* use single quotes instead of double quotes in home markup file
* finish off testimonies page
  * replace pictures with initials
  * https://www.npmjs.com/package/ngx-avatar
* write documentation
* clean up source tree
* remove shared folder
* need photos for the projects page
  * https://github.com/ivylaboratory/angular-carousel
* emails
  * get api login for sullivanexcavatinginc@gmail.com email address
* set spaces to 2
* firebase
  * image 232 x 64, 116 x 32
  * https://firebase.google.com/brand-guidelines/

```bash
# functions
https://www.google.com/search?q=html+email+tempate&rlz=1C1CHBF_enUS872US872&oq=html+email+tempate&aqs=chrome..69i57j0i10i457j0i10l6.15417j0j7&sourceid=chrome&ie=UTF-8
https://firebase.google.com/docs/storage/admin/start

## https://firebase.google.com/docs/functions/config-env
firebase functions:config:set gmail.user="normlorenz@gmail.com" gmail.pass=""
firebase deploy --only functions
firebase functions:config:get gmail
```


## more photos
* https://elements.envato.com/
* https://www.pixabay.com

## spam
* https://stackoverflow.com/questions/36227376/better-honeypot-implementation-form-anti-spam
* https://stackoverflow.com/questions/26452716/how-to-create-a-nuclear-honeypot-to-catch-form-spammers
* https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion

* https://malcoded.com/posts/angular-ngstyle/

```javascript
<input type="text" name="a_password" style="display:none !important" tabindex="-1" autocomplete="off">
```
## build information
https://github.com/inexio/angular-build-info