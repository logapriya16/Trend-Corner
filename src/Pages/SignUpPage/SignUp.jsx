import React, { useContext } from "react"
import "./SignUp.css"
import { AuthContext } from "../../Contexts/AuthContext"
export function SignUp()
{
    const {SignUp,setPassword,setEmail,Setfirstname,Setlastname}=useContext(AuthContext)
    return<div className="Auth-Container">
        <div className="SignUp-Container">
            <h2 className="auth-title">Sign Up</h2>
            <form action="">
            <div className="auth-main">
                <div className="first-last-wrapper">
                    <div className="auth-firstname">
                        <label htmlFor="Firstname">Firstname</label>
                        <input type="text" placeholder="Firstname" 
                        onChange={(e)=>Setfirstname(e.target.value)                        
                        }
                        required
                        className="auth-input"/>
                    </div>
                    <div className="auth-lastname">
                        <label htmlFor="Lastname">Lastname</label>
                        <input type="text" placeholder="Lastname"
                        onChange={(e)=>Setlastname(e.target.value
                            )}
                            required
                        className="auth-input"/>
                    </div>
                </div>
                <div className="auth-email">
                    <label htmlFor="email">E-mail </label>
                    <input required type="email" placeholder="test@gmail.com" className="auth-input"
                    
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                </div>
                <div className="auth-password">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*******" className="auth-input"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                            
                </div>
                <div className="primary-button">
                    <span onClick={()=>SignUp()}>Create New Account</span>
                </div>
                <a href="/login">
                    <div>
                        Already having an account
                    </div>
                </a>
            </div>
            </form>
            
        </div>
    </div>
}