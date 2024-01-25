import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(JSON.parse(localStorage.getItem('employees')));
    }, [localStorage.getItem('employees')]);
    
    const columns = [
        { headerName: 'First Name', field: 'firstName' },
        { headerName: 'Last Name', field: 'lastName' },
        { headerName: 'Start Date', field: 'startDate' },
        { headerName: 'Department', field: 'department' },
        { headerName: 'Date of Birth', field: 'dateOfBirth' },
        { headerName: 'Street', field: 'street' },
        { headerName: 'City', field: 'city' },
        { headerName: 'State', field: 'state' },
        { headerName: 'Zip Code', field: 'zipCode' },
    ]

    function getRowId(row) {
        return employees.indexOf(row);
    }

    return <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataGrid
            getRowId={getRowId}
            columns={columns}
            rows={employees}
        />
        <a href="/">Home</a>
    </div>
}

export default EmployeeList