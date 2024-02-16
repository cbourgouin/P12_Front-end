import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
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
import { UserProvider } from './utils/UserProvider';
import { ModalOpenProvider } from './utils/ModalOpenProvider';

dayjs.extend(utc)
dayjs.extend(timezone)

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
  <UserProvider>
    <ModalOpenProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </LocalizationProvider>
    </ModalOpenProvider>
  </UserProvider>
);
