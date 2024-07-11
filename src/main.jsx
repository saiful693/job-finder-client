import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
