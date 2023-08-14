import React, { useEffect, useState } from 'react'

export default function ChildComponent({ count, restset, onInputChange }) {
    const [updatedCount, setUpdatedCount] = useState(0);

    const handleInputChanges = ($event) => {
        onInputChange($event?.target?.value)
    }


    useEffect(() => {
        setUpdatedCount(count);
    }, [count])
    return (
        <>
            <div>test updated data {updatedCount}</div>
            <button onClick={restset}>Reset Counter</button>
            <input type="text" name="changes" id="changes" onChange={handleInputChanges} />
        </>
    )
}
