import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Provider } from "react-redux";
import {store} from "./redux"
import Questionnaire from './components/questionnaire/Questionnaire';
import Intervention from './components/intervention/Intervention';
import Information from './components/information/Information'


// Creation de l'objet browser
const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/questionnaire",
    element: <Questionnaire/>
  },
  {
    path: "/information",
    element: <Information/>
  },
  {
    path: "/intervention",
    element: <Intervention/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} >
      <App/>
    </RouterProvider>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
