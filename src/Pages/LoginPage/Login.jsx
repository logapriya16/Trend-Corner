import { useContext } from "react";
import "./Login.css"
import React from "react";
import { AuthContext } from "../../Contexts/AuthContext";
//import {  useNavigate } from "react-router-dom";
//import {useLocation} from "react-router"
export function Login(){

    
    const {getData,getDefaultData,setPassword,setEmail}=useContext(AuthContext)

     return <div className="Auth-Container">
        <div className="Login-Container">
        <h2>Sign In</h2>
        <div className="auth-main"> 
                <label for="email">Enter your Email :</label>  
                <input className="auth-input" id="email" type="email" name="email" 
                placeholder="abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label for="password">Enter your Password :</label>
                <input className="auth-input" id="password" type="password" name="password"
                  placeholder="********" onChange={(e)=>setPassword(e.target.value)}/>
                <div className="auth-buttons">
                <button className="primary-button" onClick={()=>{getData()}}>Sign In</button>
                <button  type="submit" className="primary-button" onClick={()=>{getDefaultData()}}>Test User</button>
                </div>
                <a href="/signup">
                    <div>Create New Account
                    </div>
                </a>
                </div>
        </div>
    </div>
}