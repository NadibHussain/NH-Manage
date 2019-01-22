import Authreducer from './Authreducer'
import Projectreducer from './Projectreducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const Rootreducer=combineReducers({
    auth: Authreducer,
    project: Projectreducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default Rootreducer