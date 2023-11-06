import React, { useState } from 'react';
import CountMinus from './CountMinus';
import CountPlus from './CountPlus';
import ResetButton from './ResetButton';

export default function Counter() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(prevCount =>
            prevCount + 1
        )
    }
    function decreaseCount() {
        setCount(prevCount => prevCount - 1)
    }

    function clearCount() {
        setCount(prevCount => 0)
    }
    return (
        <>
            <div className="counter">
                {count}
                <CountPlus
                    handlePlusClick={increaseCount} />
                <CountMinus
                    handleMinusClick={decreaseCount} />
                <ResetButton
                    handleResetClick={clearCount} />
            </div>
        </>
    )
};
