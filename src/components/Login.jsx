import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { check } from '../store/LoginSlice';

import './Login.css'

const Login = () => {
    const [UserState, setUserState] = useState("");
    const [PwdState, setPwdState] = useState("");
    const state = useSelector(state => state.Login);
    const handleLogin = () => {
        dispatch(check({ user: UserState, pwd: PwdState }))
    }

    const dispatch = useDispatch();
    return (
        <div className="login">
            <div className="form">
                <h1>Login Form</h1>
                <div className="inpts">
                    <input onChange={(e) => setUserState(e.target.value)} autoComplete='false' autoCorrect='false' placeholder="Type username " /><br />
                    <input onChange={(e) => setPwdState(e.target.value)} type="password" placeholder="Type password" /><br />
                    <button onClick={handleLogin} >Click</button>

                </div>
                {state.isLoggedin && !state.error &&  <span className="success">Login Success !</span>}
                {state.error &&  <span className="error">Wrong Credentials !</span>}
                user=malek password=dbpassword

            </div>

        </div>
    )
}

export default Login
