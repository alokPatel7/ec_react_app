import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthenticationWrapper() {
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (!data) {
            navigate('/account');
        }

        navigate('/dashboard');
    })

    return (<></>)
}
