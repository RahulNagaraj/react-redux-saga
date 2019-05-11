import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const root = document.getElementById('root');
const store = configureStore();

const renderApp = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    root
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App/App', renderApp);
  }
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
