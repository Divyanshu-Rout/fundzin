import React from 'react'
import './screens.css'
import logo from '../logo/fundzin.jpeg'
import facebook from '../logo/facebook.png'
import google from '../logo/google.png'
import { Link } from 'react-router-dom'


const LogIn = () => {
    return (
        <div className="logIn">
            <div className="text text-2xl">
                Login
            </div>
            <div className="logo px-9">
                <img src={logo} alt="logo" />
            </div>
            <div className="field">
                <input className="input" placeholder='Email' type="email" required></input>

            </div>
            <div className="field">
                <input className="input" placeholder='Password' type="password" required></input>

            </div>
            <div className="LogInButton">
                <button className="bg-blue-500 text-white font-medium px-28 py-2 rounded-full hover:bg-blue-600"> Login </button>
            </div>
            <div className="signForgetButtons py-3">
                <Link to='/signup'>
                    <div className="signUpButton ">
                        Sign up
                    </div>
                </Link>
                <div className="forgotButton">
                    Forgot your password?
                </div>
            </div>
            <div>
                <div className="LogInWithButton">
                    Login with
                </div>
            </div>
            <div className="logoButton">
                <img className="facebook w-11" src={facebook} alt="facebook" />
                <img className="google w-10 h-10" src={google} alt="facebook" />
            </div>

        </div>
    )
}

export default LogIn
