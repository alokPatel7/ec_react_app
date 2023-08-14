import React, { useState } from 'react'
import ChildComponent from './child';

export default function ParentComponent() {
    const [count, setCount] = useState(0);
    const [receivedData, setReceivedData] = useState('');

    const handleDataFromChild = (data) => {
        setReceivedData(data); // Update parent's state with data from child
    };

    const handleButtonClick = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <>
            <label htmlFor="count">{count}</label>
            <button onClick={handleButtonClick}>Click Me</button>
            <label htmlFor="receivedData">{receivedData}</label>
            <ChildComponent count={count} restset={resetCounter} onInputChange={handleDataFromChild} />
        </>
    )
}
