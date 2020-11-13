## turn off touchpad
* Search for mouse
* Click on Mouse and Touchpad
* Click off/on button to the right of touchpad settings

## publish to surge.sh
* build the site ```$ ng build --prod```
* rename dist/sullivans-excavating/index.html to 200.html page
* install surge if not already installed ```$ sudo npm install -g surge```
* run surge ```$ surge```
  * email: ```normlorenz@gmail.com```
  * token: ```042538```
  * project path: ```/home/norm/Projects/sullivans-excavating/dist/sullivans-excavating```
  * size: ```91 files, 7.2 MB```
  * domain: ```sullivans-excavating.surge.sh```

[look here](https://medium.com/@nioperas06/deploy-angular-apps-to-surge-7ee763db2235)

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
* use initials instead of pictures for testimonies
```html
<img _ngcontent-vob-c24="" src="assets/images/logo-ver-2.svg" width="304px" height="132px" alt="logo">
```
* plumb in emails
* finish off services
* finish off about us page
* clean up assets
* write documentation
* hook site into Google maps
* clean up src tree
* email required fields
* adjust services icons
* set spaces to 2
* about and projects need to be wider
* new favicon.ico
```html
<a href="tel:5099362681">509 936 2681</a>
<a href="mailto:sulli99181@outlook.com">sulli99181@outlook.com</a>
```
* 
```bash
# functions
firebase deploy --only functions
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
