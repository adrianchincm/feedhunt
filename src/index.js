import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import { persistor, store } from './store/configureStore';

import messages_en from "./translations/en.json";

document.body.style.overscrollBehaviorY = "none";

const messages = {
  'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <IntlProvider locale={language} messages={messages[language]}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
