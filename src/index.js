import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import EmployeeList from './pages/EmployeeList/EmployeeList'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LocalizationProvider>
);
