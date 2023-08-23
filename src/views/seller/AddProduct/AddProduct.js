import React from 'react'
import { Button } from 'primereact/button';
import ToolbarComponent from '../../../shared/Toolbar/Toolbar';

export default function AddProductComponent() {
    return (
        <div className='procuct-wrapper'>
            <ToolbarComponent header={'Add Product'} />
            <div className='pd-container'>
                <div className="p-grid">
                    <div className="p-col-6">Column 1</div>
                    <div className="p-col-6">Column 2</div>
                </div>
            </div>
        </div>
    )
}
