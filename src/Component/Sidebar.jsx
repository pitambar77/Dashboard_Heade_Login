import React from 'react'
import { BsArrowLeftShort,BsSearch,BsFillPersonLinesFill,BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        {
            title:"Employee",
            url:"/employee",
            cName:"nav-links"
        },
        { 
            title:"Department",
            url:"/department",
            cName:"nav-links",
            submenu:true,
            submenuItems:[
                {
                    title:"IT",
                    url:"/it",
                    cName:"nav-links"
                },
                {
                    title:"Finace",
                    url:"/finace",
                    cName:"nav-links"
                }
            ],
        },
        {
            title:"Profile", spacing:true,
            url:"/profile",
            cName:"nav-links"
        },
        {
            title:"Setting",
            url:"/setting",
            cName:"nav-links"
        }
    ]

    return (
        <div className='flex'>
            <div className={` bg-slate-800 h-screen p-5 pt-8 ${open ? "w-72" :"w-20"} duration-300 relative`}>
                <BsArrowLeftShort className={`bg-white  text-slate-950 text-3xl rounded-full 
                     absolute -right-3 top-6 
                     border border-slate-600 cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen
                     (!open)}/>
           

            <div className='inline-flex'>
                <AiFillEnvironment className={`bg-slate-300 text-3xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && " scale-0"}`}>Sidebar</h1>
            </div>
            <div className={` flex items-center rounded-md  bg-slate-700 mt-6 ${!open ? "px-2.5":"px-4"} py-2`}>
                <BsSearch className={` text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>

                <input type={"Search"} placeholder='Search' className={` text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
            </div>

                <ul className='pt-2'>
                    {Menus.map((menu,index)=>(
                        <>
                        <li key={index} 
                        className={` text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md   ${menu.spacing ? "mt-9":"mt-2"} `}>
                            <span>
                                <BsFillPersonLinesFill className='text-2xl block float-left'/>
                            </span>
                            <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>
                            <Link className={menu.cName} to={menu.url}>
                             {menu.title }    
                             </Link>
                                {/* {menu.title} */}
                            </span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=>setSubmenuOpen(!submenuOpen)}  />

                            )}

                        </li>

                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem,index)=>(
                                    <li key={index} className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-700 rounded-md '>
                                        <Link className={submenuItem.cName} to={submenuItem.url}>
                                            {submenuItem.title } 
                                        </Link>
                                        {/* {submenuItem.title} */}
                                        
                                    </li>
                                ))}
                            </ul>
                        )}
                        </>
                    ))}

                </ul>


            </div>

            <div className='p-7 w-full bg-slate-500'>
                {/* <h1 className='text-2xl font-semibold' >Containt page</h1> */}
                <Outlet/>
            </div>
        </div>
    )
}
export default Sidebar;