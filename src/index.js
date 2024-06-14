import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Onboarding from './components/onboarding/Onboarding';
import Questionnaire from './components/questionnaire/Questionnaire';
import Intervention from './components/intervention/Intervention';

// Creation de l'objet browser
const router= createBrowserRouter([
  {
    path: "/",
    element: <Onboarding/>
  },
  {
    path: "/plomberie",
    element: <Questionnaire/>
  },
  {
    path: "/plomberie/intervention",
    element: <Intervention/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
