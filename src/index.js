import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating size={24} color='blue' className="test" />
  </React.StrictMode>
);
