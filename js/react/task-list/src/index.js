import React from 'react';
import ReactDOM from 'react-dom/client';
import ListPage from './pages/ListPage/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListPage />
  </React.StrictMode>
);
