import React from 'react'
import {EmployeeData} from './EmployeeData';
import { useNavigate,Link } from 'react-router-dom';

const EmployeeCrud=()=> {

   let history = useNavigate();

   const handleEdit =(id , name, age)=>{

    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)

    

   }

    const handleDelete=(id)=>{
        var index = EmployeeData.map(function(e){
            return e.id
        }).indexOf(id);

        EmployeeData.splice(index,1);

        history("/employee");


    }

  return (
    <>
    <div className=' '>
        <table className='w-96'>
            <thead className='  h-10 w-full  text-white underline underline-offset-8 '>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className=' text-white text-center'>
                {
                    EmployeeData && EmployeeData.length > 0 
                    ?
                     EmployeeData.map((item)=>{
                        return(
                            <tr>
                                <td className=' text-left p-2'>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Age}
                                </td>
                                <td>
                                    <Link to={"/edit"}>
                                    <button className=' bg-blue-600 h-6 w-12 border rounded ' onClick={()=>handleEdit(item.id, item.Name, item.Age)}>Edit</button>
                                    </Link>
                                    
                                    <button className=' bg-red-800 h-6 w-14  border rounded mt-2 mx-2' onClick={()=>handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>

                        )
                    }) 
                    :
                    "No data Available"
                }
            </tbody>
        </table>
        <br>
        </br>
        <Link to={"/create"}>
        <button className='bg-blue-600 h-6 w-72 mx-10  border rounded hover:bg-sky-400'>Create</button>
        </Link>
    </div>
    </>
  )
}
export default  EmployeeCrud;
