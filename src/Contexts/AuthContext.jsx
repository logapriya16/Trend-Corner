import React, { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export function AuthProvider({children}){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [firstname,Setfirstname]=useState("")
    const [lastname,Setlastname]=useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem("encodedToken")
    const [isLoggedIn,SetIsLoggedIn]=useState(token)
    
    //login function for a user
    const getData=async()=>{
        try{
            const creds={
                email: email,
                password: password
            }
            //console.log(JSON.stringify(creds))
            const response = await fetch("/api/auth/login",{
                method:'POST',
                body:JSON.stringify(creds)
            });
            const {encodedToken} = await response.json();
            localStorage.setItem("encodedToken",encodedToken)
            
            SetIsLoggedIn(encodedToken)
           //console.log(location.state)
            console.log(response)
           navigate(location.state.from.pathname)
           if(response.status===404){
            toast.warning("Server Error ", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
           }
        }
        catch(error){
            console.error(error)
        }   
    }

    //login function for test User
    const getDefaultData=async()=>{
        try{
            const creds={
                email: "logapriya@gmail.com",
                password: "1234"
            }
            //console.log(JSON.stringify(creds))
            const response = await fetch("/api/auth/login",{
                method:'POST',
                body:JSON.stringify(creds)
            });
            const {encodedToken} = await response.json();
            localStorage.setItem("encodedToken",encodedToken)
           console.log(encodedToken)
                console.log(response)
                SetIsLoggedIn(encodedToken)
                if(response.status===200){
                    toast.success("Logged In ", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      if(response.status===500){}
                }
           navigate(location.state.from.pathname)
           
        }
        
        catch(error){
            console.error(error)
        }   
    }

    //signUp function for a new user
    const SignUp=async()=>{

        try{
            const creds={
                email:email,
                password:password,
                firstname:firstname,
                lastname:lastname
            }
            const response = await fetch("/api/auth/signup",{
                method:'POST',
                body:JSON.stringify(creds)
            });
            const {encodedToken}=await response.json();
            localStorage.setItem("encodedToken",encodedToken)
            SetIsLoggedIn(encodedToken)
            console.log(response)
            console.log(creds)            
            if(response.status===201){
                navigate("/products")
                toast.success("Logged In", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
            }
        }
        catch(error){console.log("Error while SignUp",error)}
    }
    return(
        <AuthContext.Provider  value={{getData,getDefaultData,password,setPassword,email,setEmail,Setfirstname,Setlastname,isLoggedIn,SetIsLoggedIn,SignUp}}>
            {children}
        </AuthContext.Provider>
    )
}