import React from 'react'

export default function Toolbar({ header }) {
    return (
        <>
            <div className='toolbar-wrapper'>
                <div className='left-item'>
                    <div className='header'><h2>{header}</h2></div>
                </div>
                <div className='right-item'></div>
            </div>
        </>
    )
}
