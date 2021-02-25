import React from 'react';

const VALIDATED = 'Form is Complete!'
const INVALIDATED = 'Form is Incomplete!'

const Message = (props) => {

    const { isFormValid } = props

    return (
        <div>
            <h3 className="text-center message">
                { isFormValid ? VALIDATED : INVALIDATED }
            </h3>
        </div>
    )
}

export default Message;
