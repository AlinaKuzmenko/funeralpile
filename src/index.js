import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';
import Home from './screens/Home';
import About from './screens/About';
import paths from './constants/paths';
import Discography from './screens/Discography';
import Merch from './screens/Merch';
import Contact from './screens/Contact';
import DataPrivacy from './screens/DataPrivacy';
import Unknown from './screens/Unknown';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.home} element={<App />}>
      <Route exact path={paths.home} element={<Home />} />
      <Route path={paths.about} element={<About />} />
      <Route path={paths.discography} element={<Discography />} />
      <Route path={paths.merch} element={<Merch />} />
      <Route path={paths.contact} element={<Contact />} />
      <Route path={paths.dataPrivacy} element={<DataPrivacy />} />
      <Route path={paths.unknown} element={<Unknown />} />
    </Route>
  )
);

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
