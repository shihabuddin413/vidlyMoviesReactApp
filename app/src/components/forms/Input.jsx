import React from 'react';


const ShowError = ({ error }) => <div className="invalid-feedback">{error}</div>

const ShowSelectOptions = ({ options, getStyle, id, name, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={getStyle()}
            id={id}
            name={name}
        >
            {options.map(option => <option key={option}>{option}</option>)}
        </select >
    )
}


function InputBox({ label, name, error, options, type, value, onChange }) {
    let getStyle = () => error ? "form-control is-invalid" : "form-control"

    if (type === "select") {
        return (
            <div className="form-group">
                <label htmlFor="username">{label}</label>
                <ShowSelectOptions
                    value={value}
                    onChange={onChange}
                    getStyle={getStyle}
                    options={options}
                    id={name}
                    name={name}
                />
                {error && <ShowError error={error} />}
            </div>
        )
    }

    return (
        <div className="form-group">
            <label htmlFor="username">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                id={name}
                name={name}
                className={getStyle()}
                placeholder={label}
            />
            {error && <ShowError error={error} />}
        </div>
    );
}

export default InputBox;

