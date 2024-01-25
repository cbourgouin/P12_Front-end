import { useEffect, useState } from "react";
import InputDatePicker from "../InputDatePicker/InputDatePicker";
import InputText from "../InputText/InputText";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Form({ states, saveEmployee }) {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        startDate: null,
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: 0
    });

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    return <form action="#" id="create-employee" onSubmit={(e) => saveEmployee(e, formValues)}>
        <InputText
            id="first-name"
            label="First Name"
            value={formValues.firstName}
            onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
        />
        <InputText
            id="last-name"
            label="Last Name"
            value={formValues.lastName}
            onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
        />
        <InputDatePicker
            id="date-of-birth"
            label="Date of Birth"
            value={formValues.dateOfBirth}
            onChange={(newValue) => setFormValues({ ...formValues, dateOfBirth: newValue })}
        />
        <InputDatePicker
            id="start-date"
            label="Start Date"
            value={formValues.startDate}
            onChange={(newValue) => setFormValues({ ...formValues, startDate: newValue })}
        />
        <fieldset className="address">
            <legend>Address</legend>
            <InputText
                id="street"
                label="Street"
                value={formValues.street}
                onChange={(e) => setFormValues({ ...formValues, street: e.target.value })}
            />
            <InputText
                id="city"
                label="City"
                value={formValues.city}
                onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
            />
            <label htmlFor="state-label">State</label>
            <Select
                labelId="state-label"
                id="state-select"
                value={formValues.state}
                sx={{ minWidth: "150px" }}
                onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
            >
                {
                    states.map((state, index) =>
                        <MenuItem value={state.abbreviation}
                            key={"option_" + index}>{state.name}
                        </MenuItem>
                    )
                }
            </Select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" value={formValues.zipCode} onChange={(e) => setFormValues({ ...formValues, zipCode: e.target.value })} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
            labelId="state-label"
            name="department"
            id="department"
            value={formValues.department}
            sx={{ minWidth: "150px" }}
            onChange={(e) => setFormValues({ ...formValues, department: e.target.value })}
        >
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Legal">Legal</MenuItem>
        </Select>
        <button className='submit_button' type='submit'>Save</button>
    </form>
}

export default Form;