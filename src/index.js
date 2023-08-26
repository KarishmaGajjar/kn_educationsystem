import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Header from './Header';
import CategoriesDetail from './CategoriesDetail';
import Categories from './Categories';
import Footer from './Footer';
import HomePage from './HomePage';

import reportWebVitals from './reportWebVitals';
import MainSection from './MainSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 	<MainSection/>
  <Categories/>
  <hr/>
  <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
