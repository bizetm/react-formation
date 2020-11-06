import React from 'react';

function InputField({ label, type, placeholder, name, inputRef, ...props }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                ref={inputRef}
                {...props} />
        </div>
    );
}

InputField.defaultProps = {
    type: "text"
}

export default InputField;