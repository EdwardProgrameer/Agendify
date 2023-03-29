import React from 'react';
import ReactDOM from 'react-dom/client'
import { AgendifyApp } from './AgendifyApp'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <AgendifyApp />
    </BrowserRouter>
  </React.StrictMode>

)
