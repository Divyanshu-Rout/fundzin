import React from 'react'
import logo from '../logo/fundzin.jpeg'
import facebook from '../logo/facebook.png'
import google from '../logo/google.png'
import { Link } from 'react-router-dom'


const SingUp = () => {
    return (
        <div className="absolute top-2/4
        left-2/4 transform -translate-y-2/4 -translate-x-2/4">
            <div className="pb-8 font-semibold text-center text-2xl">
                Sign Up
            </div>
            <div className="flex items-center px-9">
                <img src={logo} alt="logo" />
            </div>
            <div className="reletive my-5">
                <input className="w-full border-2 rounded-3xl border-gray-400 bg-transparent p-1.5 pl-3" placeholder='Email' type="email" required></input>

            </div>
            <div className="reletive my-5">
                <input className="w-full border-2 rounded-3xl border-gray-400 bg-transparent p-1.5 pl-3 " placeholder='Enter Password' type="password" required></input>

            </div>
            <div className="reletive my-5">
                <input className="w-full border-2 rounded-3xl border-gray-400 bg-transparent p-1.5 pl-3" placeholder='Confirm Password' type="password" required></input>

            </div>
            <div className="SignUpButton">
                <button className="bg-blue-500 text-white font-medium px-28 py-2 rounded-full hover:bg-blue-600"> Sign Up </button>
            </div>
            <div className="flex justify-between py-3 font-medium text-sm text-blue-500">
                <Link to='/'>
                    <div className="hover: cursor-pointer hover:text-blue-800 ">
                        Login
                    </div>
                </Link>
                <div className="hover: cursor-pointer hover:text-blue-800">
                    Forgot your password?
                </div>
            </div>
            <div>
                <div className="reletive mt-6 text-blue-600 font-semibold text-center">
                    Login with
                </div>
            </div>
            <div className="pt-5 flex justify-center">
                <img className="w-11 transform hover:scale-125 hover: cursor-pointer" src={facebook} alt="facebook" />
                <img className="ml-2 border-2 border-blue-600 rounded-full p-1 w-10 h-10 transform hover:scale-125 hover: cursor-pointer" src={google} alt="facebook" />
            </div>

        </div>
    )
}

export default SingUp
