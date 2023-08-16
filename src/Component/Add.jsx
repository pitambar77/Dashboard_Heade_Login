import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { EmployeeData } from './EmployeeData';
import {v4 as uuid} from "uuid";

const Add=()=> {
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
   
    let history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        EmployeeData.push({id:uniqueId,Name:a,Age:b});

        history("/employee")
    }

  return (
    <>
    <div>
        <form className='mt-8'>
           <label className="p-4" controlId="FormName">
            <input className="border border-blue-300 rounded" type="text" placeholder="Enter Name " required onChange={(e)=>setName(e.target.value)}>

            </input>
           </label>
           <label className="mx-2" controlId="FormAge">
            <input className="border border-blue-300 rounded " type="text" placeholder="Enter Age " required onChange={(e)=>setAge(e.target.value)}>

            </input>
           </label>
           <button className='bg-blue-600 h-6 w-16 mx-2 border rounded hover:bg-sky-400 mt-2' onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>
    </>
  )
}
export default  Add;
