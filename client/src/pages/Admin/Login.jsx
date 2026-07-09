import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [role, setRole] = useState("User");


  const styles = {

    page:{
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#f5fff8",
      fontFamily:"Arial, sans-serif"
    },


    box:{
      width:"850px",
      display:"flex",
      background:"white",
      borderRadius:"25px",
      overflow:"hidden",
      boxShadow:"0 15px 40px rgba(0,0,0,0.15)"
    },


    left:{
      width:"45%",
      background:"#16a34a",
      color:"white",
      padding:"60px 40px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    },


    title:{
      fontSize:"40px",
      marginBottom:"25px"
    },


    right:{
      width:"55%",
      padding:"50px",
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    },


    heading:{
      textAlign:"center",
      color:"#14532d"
    },


    input:{
      padding:"15px",
      borderRadius:"12px",
      border:"1px solid #ddd",
      outline:"none",
      fontSize:"15px"
    },


    roles:{
      display:"flex",
      gap:"15px"
    },


    roleBtn:{
      flex:1,
      padding:"12px",
      border:"none",
      borderRadius:"25px",
      cursor:"pointer"
    },


    button:{
      padding:"15px",
      border:"none",
      borderRadius:"30px",
      background:"#16a34a",
      color:"white",
      fontSize:"17px",
      cursor:"pointer",
      transition:"0.3s"
    },


    text:{
      textAlign:"center"
    },


    link:{
      color:"#16a34a",
      fontWeight:"bold",
      cursor:"pointer"
    }

  };
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        {/* LEFT */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            🌱 EcoBins
          </h1>
          <h2>
            Smart Garbage Monitoring
          </h2>
          <p>
            Login to monitor garbage levels,
            air quality and manage smart waste collection.
          </p>


        </div>
        {/* LOGIN FORM */}
        <div style={styles.right}>
          <h2 style={styles.heading}>
            {role} Login
          </h2>
          <div style={styles.roles}>
            <button
              onClick={()=>setRole("User")}
              style={{
                ...styles.roleBtn,

                background:
                role==="User"
                ? "#16a34a"
                :"#dcfce7",

                color:
                role==="User"
                ?"white"
                :"#15803d"

              }}

            >

              User

            </button>
            <button

              onClick={()=>setRole("Admin")}

              style={{
                ...styles.roleBtn,

                background:
                role==="Admin"
                ? "#16a34a"
                :"#dcfce7",

                color:
                role==="Admin"
                ?"white"
                :"#15803d"
              }}
            >
              Admin
            </button>
          </div>
          <input

            style={styles.input}

            type="email"

            placeholder="Email Address"

          />



          <input

            style={styles.input}

            type="password"

            placeholder="Password"

          />




          <Link to="../../pages/Admin/Home.jsx"
            style={styles.button}
            onMouseOver={(e)=>
              e.target.style.transform="translateY(-3px)"
            }
            onMouseOut={(e)=>
              e.target.style.transform="translateY(0)"
            }
          >
            Login as {role}
          </Link>





          <p style={styles.text}>

            Don't have an account?

            <span style={styles.link}>
              {" "}Signup
            </span>


          </p>



        </div>


      </div>


    </div>

  );

}


export default Login;