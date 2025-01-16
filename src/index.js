import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import {Context} from './store/FirebaseContext';
import app from './Firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <FirebaseContext.Provider value={{app}}>
        <App />
    </FirebaseContext.Provider>
    </Context>
  </React.StrictMode>
);


