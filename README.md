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
* use initials instead of pictures for testamonies

```html
<img _ngcontent-vob-c24="" src="assets/images/logo-ver-2.svg" width="304px" height="132px" alt="logo">
```
* plumb in emails
* finish off services
* finish off about us page
* clean up assets
* clean up src tree
* build new components
* adjust services icons
* set spaces to 2
* split out navigation and routing
* new favicon.ico
* ng serve --open
```html
<a href="tel:5099362681">509 936 2681</a>
<a href="mailto:sulli99181@outlook.com">sulli99181@outlook.com</a>
```