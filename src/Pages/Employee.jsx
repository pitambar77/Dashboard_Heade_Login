import React from 'react'
import EmployeeCrud from '../Component/EmployeeCrud'
import Add from '../Component/Add'
import Edit from '../Component/Edit'

const Employee=()=> {
  return (
    <>
    <div className=' bg-cyan-950 h-full items-center'>
    <EmployeeCrud/>
    <Add/>
    <Edit/>
    
    </div>
    </>
  )
}
export default  Employee
