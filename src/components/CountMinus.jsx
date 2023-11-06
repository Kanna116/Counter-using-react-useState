import React from 'react';
function CountMinus(props) {
    return (
        <>
            <div className="count--minus count--button" onClick={props.handleMinusClick}>
                <i className="fa-solid fa-minus"></i>
            </div>
        </>
    )
};

export default CountMinus
