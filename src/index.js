import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import  Rootreducer from './store/reducer/Rootreducer'
import {Provider} from 'react-redux'
import thunk  from 'redux-thunk'
import {getFirestore,reduxFirestore} from 'redux-firestore'
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase'
import fbconfig from './config/fbconfig'
const store=createStore(Rootreducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbconfig),
        reactReduxFirebase(fbconfig,{useFirestoreForProfile:true,userProfile:'user',attachAuthIsReady:true})
        )
         );
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
})

