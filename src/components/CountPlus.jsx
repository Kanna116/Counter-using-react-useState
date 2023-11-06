import React from 'react';
function CountPlus(props) {
    return (
        <>
            <div className="count--plus count--button" onClick={props.handlePlusClick}>
                <i className="fa-solid fa-plus"></i>
            </div>
        </>
    )
};

export default CountPlus