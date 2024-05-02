import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from 'react-redux';
import store from "./store.js"
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </Provider>
    
  </React.StrictMode>,
)
