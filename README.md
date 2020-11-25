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
* finish off testomonies page
  * replace pictures with initials
  * https://www.npmjs.com/package/ngx-avatar
* clean up assets
* write documentation
* clean up source tree
* share this web site on google
* remove shared folder
* need photos for the projects page
* emails
  * get api login for sullivanexcavatinginc@gmail.com email address
* set spaces to 2

```bash
# functions
https://www.google.com/search?q=html+email+tempate&rlz=1C1CHBF_enUS872US872&oq=html+email+tempate&aqs=chrome..69i57j0i10i457j0i10l6.15417j0j7&sourceid=chrome&ie=UTF-8
https://firebase.google.com/docs/storage/admin/start

## https://firebase.google.com/docs/functions/config-env
firebase functions:config:set gmail.user="normlorenz@gmail.com" gmail.pass=""
firebase deploy --only functions
firebase functions:config:get gmail
```