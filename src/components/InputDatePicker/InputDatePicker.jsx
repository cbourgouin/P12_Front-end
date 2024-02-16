import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputDatePicker({id, label, value, onChange}) {
    return <>
        <label htmlFor={id}>{label}</label>
        <DatePicker id={id} value={value} format='DD/MM/YYYY' onChange={onChange} timezone='UTC' />
    </>
}

export default InputDatePicker;