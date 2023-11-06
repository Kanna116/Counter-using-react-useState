import React from 'react';

function ResetButton(props) {
    return (
        <>
            <button className='reset--btn' onClick={props.handleResetClick}>Reset</button>
        </>
    )
}

export default ResetButton