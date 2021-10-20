import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { composeWithDevTools} from 'redux-devtools-extension'

// const firebaseConfig = {
//   apiKey: "AIzaSyAZjalBlQl1i60GyS_FgEAPBGDler7C6FU",
//   authDomain: "resume-8915a.firebaseapp.com",
//   projectId: "resume-8915a",
//   storageBucket: "resume-8915a.appspot.com",
//   messagingSenderId: "988899839098",
//   appId: "1:988899839098:web:201f11c4c1ab285b423fc3"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAGCgGrRiVTIKR5ixgJrHDUf0RnJ89YD6E",
  authDomain: "resumepro-f997a.firebaseapp.com",
  projectId: "resumepro-f997a",
  storageBucket: "resumepro-f997a.appspot.com",
  messagingSenderId: "342604914261",
  appId: "1:342604914261:web:4ce44a11dc61ab5743fedc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,  
  )
);


ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      >
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);