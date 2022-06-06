import React from 'react';


let ShowError = ({ error }) => {
    return (
        <div className="invalid-feedback">{error}</div>
    )
}


function InputBox({ label, name, value, onChange, error }) {


    let getStyle = () => {
        let style = "form-control ";
        if (error) style += "is-invalid"
        return style
    }

    return (
        <div className="form-group">
            <label htmlFor="username">{label} </label>
            <input autoFocus
                onChange={onChange}
                value={value}
                id={name}
                name={name}
                type="text"
                className={getStyle()} />
            <ShowError error={error} />
        </div>
    );
}

export default InputBox;