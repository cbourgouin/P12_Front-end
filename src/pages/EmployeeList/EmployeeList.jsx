import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { UtilisateurContext } from '../../utils/UserProvider';
import { useNavigate } from "react-router-dom";

function EmployeeList() {
    navigate = useNavigate()
    const {user, setUser} = useContext(UtilisateurContext);
    console.log("nb d'objet present avant affichage du tableaux : " + user.length);

    
    const columns = [
        { headerName: 'First Name', field: 'firstName' },
        { headerName: 'Last Name', field: 'lastName' },
        { headerName: 'Start Date', field: 'startDate' },
        { headerName: 'Department', field: 'department' },
        { headerName: 'Date of Birth', field: 'dateOfBirth' },
        { headerName: 'Street', field: 'street' },
        { headerName: 'City', field: 'city' },
        { headerName: 'State', field: 'state' },
        { headerName: 'Zip Code', field: 'zipCode' }
    ]

    function getRowId(row) {
        return user.indexOf(row);
    }

    return <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataGrid
            getRowId={getRowId}
            columns={columns}
            rows={user}
        />
        <span onClick={() => navigate("/")}>Home</span>
    </div>
}

export default EmployeeList