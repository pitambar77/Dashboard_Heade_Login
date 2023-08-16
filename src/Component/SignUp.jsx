import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { useFormik } from 'formik';
import { SignUPschema } from '../schemas';

const initialValues = {
    name: "",
    email: "",
    password: ""
};

const SignUp = () => {

    const {values, errors, touched, handleChange,handleSubmit, handleBlur} = useFormik({
        initialValues: initialValues,
        validationSchema:SignUPschema,
        onSubmit: (values, action) => {

            
            action.resetForm();
        }

    })
   
   


    return (
        <>
          {/* outer */}
            <div className=' bg-slate-300 h-screen flex justify-center items-center'>
                {/* form */ }
                <div className=' bg-slate-100 rounded shadow-lg shadow- shadow-slate-600 p-10 h-auto w-[350px] flex flex-col justify-center '>
                    <form className=' space-y-3 '  onSubmit={handleSubmit}>
                        <div>
                             <p className=' font-semibold text-2xl tracking-wide text-center  '>Sign UP</p>
                        </div>
                        <div>
                            <p className=' font-semibold'>Name</p>
                            <input className=' outline-none h-8 border border-sm border-blue-300 rounded w-full px-3'
                                type='name'
                                placeholder='Name'
                                name='name'
                                id='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            { errors.name && touched.name ? <p className='form-error text-red-800'>{errors.name}</p> :null}
                        </div>
                        <div>
                            <p className=' font-semibold'>Email</p>
                            <input className=' outline-none h-8 border border-sm border-blue-300 rounded w-full px-3'
                                type='email'
                                placeholder='Email'
                                name='email'
                                id='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                             { errors.email && touched.email ? <p className='form-error text-red-800'>{errors.email}</p> :null}
                        </div>
                        <div>
                            <p className=' font-semibold'>Password</p>
                            <input className=' outline-none h-8 border border-sm border-blue-300 rounded w-full px-3'
                                type='password'
                                placeholder='Password'
                                name='password'
                                id='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                             { errors.password && touched.password ? <p className='form-error text-red-800'>{errors.password}</p> :null}
                        </div>
                        {/* <div className='flex gap-3 mt-1'>
                    <input type='checkbox'/>
                    <p>Remember me ?</p>
                </div> */}
                        <div >
                            <button className=' bg-blue-600  h-8 w-full text-white font-semibold rounded-full mt-2 hover:bg-sky-950 duration-300'>SignUP</button>
                            {/* <p className=' text-end'>Forgot Password! </p> */}
                        </div>
                        <p className=' flex justify-center font-bold'>OR</p>
                        <div className=' flex flex-row justify-center gap-6 text-3xl mt-3'>
                            <FcGoogle className=' cursor-pointer' />
                            <FaFacebookSquare className=' text-blue-600 cursor-pointer' />
                        </div>
                        <div>
                            <p className=' text-zinc-500'>Already Account Exist? <span className=' text-slate-950 font-semibold underline underline-offset-4'><Link to="/signIn">SignIn</Link></span></p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
export default SignUp
