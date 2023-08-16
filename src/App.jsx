import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Employee from "./Pages/Employee";
import Department from "./Pages/Department";
import It from "./Pages/It";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";


const App=()=>{
  return(

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<Home/>}> 
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/department" element={<Department/>}/>
        <Route path="/it" element={<It/>}/>

        </Route>
        
        
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
    
  )
}
export default App;