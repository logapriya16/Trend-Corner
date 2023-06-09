import { useContext } from "react";
import "./Login.css";
import React from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export function Login() {
  const { getData,isLoggedIn, getDefaultData, setPassword, setEmail,SetIsLoggedIn } = useContext(
    AuthContext
  );
  
const navigate=useNavigate()
  return (
    <div className="Auth-Container">
      {isLoggedIn ? 
      <div className="logined-in">
      <h1>You are logged In Now</h1>
      <button className="product-primary-button" onClick={()=>{localStorage.removeItem("encodedToken"); SetIsLoggedIn(undefined);
      toast.error("Logged Out", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }}>LOGOUT</button>
      <p><Link to="/products">Explore fasion world</Link></p>

        </div>
      :<div className="Login-Container">
        <h2>Sign In</h2>
        <div className="auth-main">
          <label for="email">Enter your Email :</label>
          <input
            className="auth-input"
            id="email"
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password">Enter your Password :</label>
          <input
            className="auth-input"
            id="password"
            type="password"
            name="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="auth-buttons">
            <button
              className="primary-button"
              onClick={() => {
                getData();
              }}
            >
              Sign In
            </button>
            <button
              type="submit"
              className="primary-button"
              onClick={() => {getDefaultData();  
                
                }}
            >
              Test User
            </button>
          </div>
          <button style={{backgroundColor:"transparent"}} onClick={()=>navigate("/signup")}>
            Create New Account
          </button>
        </div>
      </div>
      
      }
      
    </div>
  );
}
