import React, { useEffect } from 'react'
import { useState } from 'react';
import { EmployeeData } from './EmployeeData';
import { useNavigate } from 'react-router-dom';

const Edit=()=> {

    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [id, setId] = useState('')

    let history = useNavigate();

    var index = EmployeeData.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e)=>{
        e.preventDefault();

        let a = EmployeeData[index];
        a.Name=name;
        a.Age=age;


        history("/employee")
    }

    useEffect(()=>{

        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))

    },[])

  return (
   <div>
     <form>
           <label className="p-4" controlId="FormName">
            <input className="border border-blue-300 rounded" type="text" placeholder="Enter Name " value={name} required onChange={(e)=>setName(e.target.value)}>

            </input>
           </label>
           <label className="mx-2 " controlId="FormAge">
            <input className="border border-blue-300 rounded" type="text" placeholder="Enter Age " value={age} required onChange={(e)=>setAge(e.target.value)}>

            </input>
           </label>
           <button className=' bg-green-700 border rounded h-6 w-16 mx-2 mt-2' onClick={(e)=>handleSubmit(e)} type='submit'>Update</button>
        </form>

   </div>
  )
}
export default  Edit;
