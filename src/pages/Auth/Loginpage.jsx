import React, { useEffect } from 'react'
import Login from '../../components/Login'

function Loginpage() {

    useEffect(()=>{
        document.title = "Login Page";
    });
    return (
        <div>
            <Login />
        </div>
    )
}

export default Loginpage