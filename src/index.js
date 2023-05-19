import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/magnific-popup/dist/magnific-popup.css';
import './assets/css/font-awesome.css';
import './assets/css/font/flaticon.css';
import './assets/css/nice-select.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './index.css';

ReactDOM.render(
  // <BrowserRouter basename={"/tm/react/rumble/"}>
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>,
  document.getElementById('rumble')
);

reportWebVitals();
