import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loginpage from './pages/Auth/Loginpage';
import Tempchart from './components/Tempchart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
    errorElement: "Not Found",
  },

  {
    path:"/dashboard",
    element:<App/>,
    errorElement:"Not Found",
  },
  {
    path:"/chart",
    element:<Tempchart/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
