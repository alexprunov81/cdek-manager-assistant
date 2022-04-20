import React from 'react'

const Input = props => {
    return (
        <div className="input-field col s12">
            <input
                data={props.dataTag}
                onInput={props.onInput}
                onChange={props.onChange}
                onFocus={props.onFocusIn}
                onBlur={props.onFocusOut}
                id={props.inputId}
                type={props.type}
                className={props.className}
                ref={props.input}
            />
            <label className={""} data-label htmlFor={props.inputId}>{props.labelName}</label>
        </div>
    )
}

export default Input