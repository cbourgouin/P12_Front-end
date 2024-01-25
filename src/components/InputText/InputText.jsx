function InputText({id, label, value, onChange}) {
    return <>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} onChange={onChange} />
    </>
}

export default InputText;