import React from "react";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
      };

    return(

         <nav className="w-full h-14 bg-indigo-300 flex justify-between px-4 items-center md:px-4">
            <h1 className="text-2xl  font-bold ">Logo</h1>
            <div className="md:hidden" onClick={handleClick}>
                {/* <a className="text-4xl " href="#">&#8801;</a> */}
                <i className={clicked ? "fas fa-times" : "fas fa-bars "}></i>
            </div>
            <ul className=" md:flex hidden font-semibold m-4 ">
                {MenuItems.map((item,index)=>{
                    return(
                        <li className=" mx-[10px] cursor-pointer" key={index}>
                            <Link className={item.cName} to={item.url}>
                             {item.title }      
                             </Link>
                        </li>

                    );
                })}
                
            </ul>
            <button className="hidden md:block px-2 py-2 bg-indigo-950 text-white font-semibold rounded "><Link to="/signUp">Sign UP</Link> </button>
           
           
        </nav> 
        
    )
}
export default Header;