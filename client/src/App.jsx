import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin/Home";
import User from "./pages/User/Home"
import Signup from "./pages/signup/signup";
import Login from "./pages/Login"


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/admin" 
          element={<Admin />} 
        />
        <Route 
          path="/user" 
          element={<User />} 
        />
        <Route path="/login"
        element={<Login/>}/>
        <Route 
          path="/signup" 
          element={<Signup />} 
        />
      </Routes>
    </BrowserRouter>

  );

}
export default App;