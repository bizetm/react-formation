import React from 'react';

function TextField({ label, type, placeholder, name, inputRef }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea
                type={type}
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                ref={inputRef} />
        </div>
    );
}

TextField.defaultProps = {
    type: "text"
}

export default TextField;