import React, { useRef } from 'react'
import "../CSS/login.css"
import { FaUser } from 'react-icons/fa6'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const username = useRef("");
    const password = useRef("");
    const navigator = useNavigate();
    const loginClicked = ()=>{
        const e_un = username.current.value;
        const e_pw = password.current.value;

        const data = {username:e_un};
        try{
            const db_result = axios.post("https://tsbackend-2bxj.onrender.com/getuser",data);
            db_result.then(response=>{
                if(response.data["Status"]===true){
                    const db_pw = response.data["Password"];
                    if(e_pw===db_pw){
                        alert("Login Successful");
                        navigator("/dashboard");
                    }else{
                        alert("Login Failed");
                        navigator("/");
                    }
                }else{
                    alert("User Not Found");
                    navigator("/");
                }
            }).catch(err=>{
                console.error(err);
            })
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className='login-component'>
            <h1 className='login-component-topic'>Welcome to the Tissue Culture Monitoring System</h1>
            
            <div className="login-form-container">
            <div className="form-logo-container">
            <FaUser/>
            </div>
                <div className="login-form-grp">
                    <input type="text" ref={username} className="login-input" placeholder='Username' />
                </div>
                <div className="login-form-grp">
                    <input type="password" ref={password} className="login-input" placeholder='Password' />
                </div>
                <div className="login-form-grp">
                    <button type="normal" className="login-btn" onClick={()=>loginClicked()}>Login Here</button>
                </div>
            </div>
        </div>
    )
}

export default Login