
import React from 'react';
//import { useRouter } from 'next/router';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

import './Toolbar.css'

export default function ToolbarComponent({ header, rightButtonArray, endContentTemp = null }) {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const startContent = (
        <React.Fragment>
            <span className='title'>{header}</span>
            {/* <Button label="New" icon="pi pi-plus" className="mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars p-toolbar-separator mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton> */}
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            {rightButtonArray?.map((button, index) =>
                <Button key={index} icon={button.icon} className={button?.className + ' mr-2'} label={button?.label} />
            )}
            {/* <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" /> */}
        </React.Fragment>
    );

    return (
        <div className="header-wrapper card">
            <Toolbar start={startContent} end={endContentTemp ? endContent : rightButtonArray} />
        </div>
    );
}
