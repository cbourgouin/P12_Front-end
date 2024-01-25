import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputDatePicker({id, label, value, onChange}) {
    return <>
        <label htmlFor={id}>{label}</label>
        <DatePicker id={id} value={value} onChange={onChange} />
    </>
}

export default InputDatePicker;