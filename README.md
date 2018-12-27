# VUE-JS-VUE-CLI-VUETIFY-IN-ES6-

# Importent notes:

For Basics: Used Vue functions by including vue as script into the Html.
# For 'my-project': 
node -v [see which node is installed, if no install],

npm install --global vue-cli [globally install vue js for the pc]

vue init webpack-simple myproject

cd myproject

npm install [install all project dependency]

npm run dev.

# For Project Notepad/RemindAdnan/Smriti/vue-routing:
vue init webpack myproject (use Vue Router).

# Firebase
 npm install firebase --save

[Copy Firebase config lines without script tag from firebase project.
Put it in firebase folder, named init.js.
import frebase from firebase;
import 'firebase/firestore' 
const firestoreApp=firebase.initializeApp(config);
export default firestoreApp.firestore()]

# Styles
https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css

https://fonts.googleapis.com/icon?family=Material+Icons

[copy these as stylesheet into index.html file (Not index.js)]

# For Google Maps:
Go https://console.developers.google.com

Login, Make a project.

Add Bank Account for that project.[Top left 3 line menu option>Billing>Payment method (Add here)>Budget Alert(opt)]
Go Back to APIServices>Enable Api Services
>Google Maps Javascript Api >Enable >Credentials>Credentials in the api manager>create Credentials>API>cope the key.

In index.html:(<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>)




