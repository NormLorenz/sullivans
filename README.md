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

## tasks yet to be completed
* fix favicon.ico
* fix company-logo.png - cutting off the 'g'
* use {{title}}

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

