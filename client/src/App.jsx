import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Admin/Login";
import Signup from "./pages/signup/signup";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/signup" 
          element={<Signup />} 
        />


        <Route 
          path="/admin/login" 
          element={<Login />} 
        />


        <Route 
          path="/user/login" 
          element={<Login />} 
        />


      </Routes>

    </BrowserRouter>

  );

}
export default App;