import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
     <App />
   
    <Footer/>
    
   </React.StrictMode>
);

reportWebVitals();
