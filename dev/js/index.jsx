import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './AppWrapper/App';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
    document.querySelector('#root'),
);

// Sert à l'utilisation du fichier sourcemap
// # sourceMappingURL=bundle.min.js.map
