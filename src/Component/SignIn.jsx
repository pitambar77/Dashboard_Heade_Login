import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
const SignIn =()=>{
  return (
    <>
     <div className=' bg-slate-300 h-screen flex justify-center items-center'>
        <div className=' bg-slate-100 rounded shadow-lg shadow- shadow-slate-600 p-10 h-96 w-[350px] flex flex-col justify-center '>
            <form className=' space-y-2' action=''>
                <div>
                    <p className=' font-semibold text-2xl tracking-wide text-center '>Sign In</p>
                </div>
                <div>
                    <p className=' font-semibold'>Email</p>
                    <input className=' outline-none h-8 border border-sm border-blue-300 rounded w-full px-3' type='text' placeholder='Email' required/>
                </div>
                <div>
                    <p className=' font-semibold'>Password</p>
                    <input className=' outline-none h-8 border border-sm border-blue-300 rounded w-full px-3' type='password' placeholder='Password'/>
                </div>
                <div className='flex gap-3 mt-1'>
                    <input type='checkbox'/>
                    <p>Remember me ?</p>
                </div>
                <div >
                    <button className=' bg-blue-600  h-8 w-full text-white font-semibold rounded-full m  hover:bg-sky-950 duration-300'>SignIn</button>
                    <p className=' text-end'>Forgot Password! </p>
                </div>
                <p className=' flex justify-center font-bold'>OR</p>
                <div className=' flex flex-row justify-center gap-6 text-3xl mt-3'>
                    <FcGoogle className=' cursor-pointer'/>
                    <FaFacebookSquare className=' text-blue-600 cursor-pointer'/>
                </div>
                <div>
                    <p className=' text-zinc-500'>Need an Account? <span className=' text-slate-950 font-semibold underline underline-offset-4'><Link to="/signUp">SignUp</Link></span></p>
                </div>
            </form>
        </div>

    </div>
    </>
   
  )
}
export default  SignIn
