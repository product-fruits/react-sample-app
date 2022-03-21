import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import Context from "./routes/context";
import ToursApi from './routes/tours-api';
import ClassComponent from './routes/class-component';
import Index from "./routes/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Index />} />
          <Route path="context" element={<Context />} />
          <Route path="tours-api" element={<ToursApi />} />
          <Route path="class-component" element={<ClassComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);